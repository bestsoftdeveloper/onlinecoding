const koa = require('koa2')
const serve = require('koa2-static-middleware');
var serveStatic = require('koa-static-folder');
const Router = require("koa-router");

const app = new koa();
const router = new Router();
const BodyParser = require("koa-bodyparser");
let request = require('koa2-request');
const send = require('koa-send');


const {httpProxy} = require('koa-http-proxy-middleware');
const httpsProxyAgent = require('https-proxy-agent');

const microServicePath = "http://localhost:6002";

path = require('path'),
fs = require('fs');

var staticRoot = __dirname + '/';  

// app.use(router(app));
// app.post('/api', proxy());

// app.use(BodyParser());
app.use(httpProxy('/api', {
  target: microServicePath,
  changeOrigin: true,
  rewrite: path => path.replace(/^\/api(\/|\/\w+)?$/, '/api'),
  logs: true
}))

app.use(async function  (ctx, next) {
  console.log(ctx);

  if (ctx.path.startsWith('/api')) {
    debugger;
  	console.log('api ...................');
    console.log(ctx.request.body);
    //ctx.host = "localhost:6002";
    // 
    var desiredPath = "/6002/api";
    ctx.path= microServicePath + ctx.url;
    // ctx.path = "/test"+ ctx.path;
    console.log("fffffffffffffffff " +microServicePath);
    console.log(ctx.path + " --- " +ctx.url);
    return await next();
  } else {
    if(ctx.path == '/'){
      return await next();
    }
  	console.log('b');
  	var ext = path.extname(ctx.path);
  	console.log("ext = " + ext);
  	// await next();
    if (ext !== ''){
    	console.log('aaaaaaaaaaaaaaa');
      await send(ctx, 'dist/'+ctx.path);
      // await next();
    }

    //await next()
  }
})


// router.post('/api', proxy());
router.post("/test", async function (ctx) {
    let name = ctx.request.body.name || "World";
    ctx.body = {message: `Hello ${name}!`}
});

router.get('/*', serve('./dist', { index: 'index.html' }));
app.use(router.routes()).use(router.allowedMethods());


 
const port = 80;
app.listen(port, () => console.log(`==> Listening at http://localhost:${port}`));