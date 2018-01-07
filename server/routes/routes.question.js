const router = require('koa-router')();
 // const authMiddleware = require('../shared/auth/auth.middleware').errorHandler();
const securityModule = require('../modules/security/security')();
const parse = require('co-body');
const fs = require('fs-extra');
const responseWrapper = require('../utils/responseWrapper')();
const koabusBoy = require('co-busboy');
const cmd = require('node-cmd');
const testPipeline = require('pipeline-test-node');
const jasmineNode = require('jasmine-node');
var newman = require('newman');
const mongoQuery = require('../utils/mongoQuery')();
var Mocha = require('mocha'),
    path = require('path');

var formidable = require('formidable');

//const asyncBusboy = require('async-busboy');
const uuidv4 = require('uuid/v4');
const questionService = require('../modules/question/questionService');
const jwt = require('jsonwebtoken');
const config = require('../config/development');

function getModule(name) {
    switch (name) {
        case 'security':
            {
                return securityModule;
                break;
            }
        case 'poloLogger':
            {
                return poloLoggerModule;
                break;
            }
    }
}

function formidablePromise (req, opts) {
  return new Promise(function (resolve, reject) {
    var form = new formidable.IncomingForm(opts);
    var appDir = path.dirname(require.main.filename);

    const newFileNames = [];

    const uploadDirectory = "uploads";

    form.uploadDir = appDir + '/'+uploadDirectory;
    form.keepExtensions = true;

    form.on('fileBegin', function(name, file) {
      //file.path = __dirname + '/uploads/';
      console.log('begin' );
      const fileExt = file.name.split('.').pop();
      const newFileName = uuidv4()+"."+fileExt;
      const index = newFileNames.length;

      newFileNames.push({index ,originalFileName:file.name, newFileName:newFileName, filePath: `${uploadDirectory}/${newFileName}` });

      file.path = form.uploadDir + "/" + newFileName;
      // var file_name = file.name;
      // var new_location = __dirname + '/uploads';
      // fs.exists(new_location+file_name, function(exist) {
      //   if(exist){
      //     console.log("alreadyExist");
      //   }
      //   else{
      //     console.log('notExist');
      //   }
      // })

    });

    form.parse(req, function (err, fields, files) {
      if (err) return reject(err)
      resolve({ fields: fields, files: files, newFileNames:newFileNames })
    })
  })
}

router
  .prefix('/api/question')
.use(async function(ctx, next){
  console.log("1111111111111111111111111111111");
  var authHeader = ctx.req.headers.authorization;
  console.log(authHeader);
  var r = await jwt.verify(authHeader, config.tokenPassword);
  ctx.request.body.tokenObj = r;

  return next().catch((err) => {
      console.log(err);
      console.log("333333333333333333");
      if (401 == err.status) {
    ctx.status = 401;
    ctx.body = 'Protected resource, use Authorization header to get access\n';
  } else {
    throw err;
  }
});
})
  .post("/", async function (ctx) {
  console.log("OOOOOOOOOOOOOOOOOOOOO");
    const body = ctx.request.body;
    console.log(body);
    const data = body.data;
    const method = body.proxy.method;


    // questionService
    // ctx.body = {message: "Hellome1me1me1me1me1me1me1me1me1me1me1me1me1!"}

    ctx.body = await questionService[method](ctx,data, body.tokenObj);
  })

  .post("/form", async function (ctx) {
    console.log('fooooooooooooooooooooorm');
    //https://stackoverflow.com/questions/8359902/how-to-rename-files-parsed-by-formidable
    const resp =  await formidablePromise(ctx.req,{});

    console.log("gggggggggggggggggggpppppppppppppppp");
    const proxy = JSON.parse(resp.fields.proxy);
    const data = JSON.parse(resp.fields.q);
    const answerType = JSON.parse(resp.fields.answerType);
    const timer = JSON.parse(resp.fields.timer);
  const answers = JSON.parse(resp.fields.answers);
  let testCases = null;
  if(resp.fields.testCases)
  {
    testCases = JSON.parse(resp.fields.testCases);
  }

    data.answers = resp.newFileNames;
    data.answerType = answerType;
    data.timer = timer;
  data.answers = answers;
  if(testCases)
  {
    data.testCases = testCases;
  }
  if(resp.fields.code)
  {
    data.code = resp.fields.code;
  }
    console.log(resp.newFileNames);

    ctx.body = await questionService[proxy.method](ctx,data);

  //   const body = ctx.request.body;
  //
  // const files = ctx.request.body.files;
  // console.log(files.length);
  //
  // console.log(files);
  //
  // console.log(body);
  //
  //   const data = body.data;
  //   const method = body.method;
  //   console.log(method);

     //ctx.body = {message: "Hellome1me1me1me1me1me1me1me1me1me1me1me1me1!"}


  })




  .post('/evaluation', async function(ctx) {
    const body = ctx.request.body;


    ctx.body = {ok:true};
  })

  .post("/ping-me", async function (ctx) {
    ctx.body = {message: "Hellome1me1me1me1me1me1me1me1me1me1me1me1me1!"}
  })
  .post('/ping', async function(ctx) {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    const body = ctx.request.body;
    ctx.body = {ok:true};
  })
  .post('/testadd', async function(ctx) {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    let body = ctx.request.body;
    const ppl  = await ctx.app.people.insert(body);
    // console.log(ppl.ops);
    body._id = ppl.ops[0]._id;
    ctx.body = responseWrapper.success(body);
  })
.post('/testaddm', async function(ctx) {
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  let body = ctx.request.body;
  const ppl  = await mongoQuery.collection('ssddds').insert(body);
  //console.log(ppl.ops);
  body._id = ppl.ops[0]._id;
   ctx.body = responseWrapper.success(body);
})

    .post('/tests', function*() {
        console.log("aaaaaaaaaaaaaaaaaa");
        this.state.body = yield parse.json(this);
        const body = this.state.body;
        //this.body = yield securityModule.login(body);

        var mocha = new Mocha();

var testDir = '.'

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});

// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});

        mocha.run();

        this.body = {};
    })

    .post('/security/login', async function(ctx) {
      let body = ctx.request.body;
      ctx.body = await securityModule.login(body);
    })
  .post('/security/loginfb', async function(ctx) {
    let body = ctx.request.body;
    ctx.body = await securityModule.loginfb(body);
  })

    .post('/security/:id',async function(ctx) {
        const par = ctx.params.id;
        console.log("vvvvvvvvvvvvvvvvvvvvv " +par);
        let body = ctx.request.body;

      const resp = await securityModule[par](body);

    ctx.body = resp;
})

.post('/text/getLanguage', function*() {
    this.state.body = yield parse.json(this);
    const body = this.state.body;
    const path = __dirname + "/screentexts/" + body.id + "/localization.html";
    let file = fs.readFileSync(path, "utf8");
    file = file.replace(/[^\x00-\x7F]/g, "");
    this.body = responseWrapper.sendResponse(true, file, "", "");
})

.post('/multi', function*() {
    console.log("multi execution");
    var parts = koabusBoy(this),
        part,
        fields = {};
    console.log(parts);
    console.log(this.state);
    while (part = yield parts) {
        console.log("ok");
        //console.log(part);
        if (part.length) {
            console.log(part);
            // arrays are busboy fields
            // console.log('key: ' + part[0]);
            // console.log('value: ' + part[1]);

            // fields[part[0]] = part[1];
            var r = JSON.parse(part[1]);
            if (this.state.tokenObj) {
                r.tokenObj = this.state.tokenObj;
            }
            console.log('r');

            console.log(r);
            var moduleAndMethod = r.method.split("/");
            var module = getModule(moduleAndMethod[0]);
            this.body = yield module[moduleAndMethod[1]](r);
            //this.body = {a:1};

        } else {
            // it's a stream, you can do something like:
            console.log('rrrrr');
            var fInfo = {
                fieldname: part.fieldname,
                filename: part.filename,
                mimeType: part.mimeType
            };

            console.log(fInfo);

            var dirPath = "public/uploads/" + fInfo.fieldname + "/";

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            var fileNameWithPath = dirPath + fInfo.filename;
            part.pipe(fs.createWriteStream(fileNameWithPath));

        }
    }
})






module.exports = router;
