const koa = require('koa2')
const serve = require('koa2-static-middleware');
var serveStatic = require('koa-static-folder');
const Router = require("koa-router");

const app = new koa();
const router = new Router();

const proxy = require('koa2-proxies')
const proxyUrl = ['/v2'];
const send = require('koa-send');

path = require('path'),
fs = require('fs');

var staticRoot = __dirname + '/';  

// app.use(serveStatic('./dist'));

app.use(async function  (ctx, next) {
  console.log(ctx.path);

  if (ctx.path.startsWith('/api')) {
  	console.log('a');
    await proxy({host: 'localhost:6002', ctx})
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
   //  return fs.createReadStream(staticRoot + 'index.html');//.pipe(res)

    //await next()
  }
})


router.get('/*', serve('./dist', { index: 'index.html' }));

app.use(router.routes()).use(router.allowedMethods());


 
const port = 4200;
app.listen(port, () => console.log(`==> Listening at http://localhost:${port}`));