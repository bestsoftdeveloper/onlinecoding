const Koa = require('koa');
const serve = require('koa2-static-middleware');
 
const app = new Koa();
 
app.use(serve('./dist'));
 
app.listen(8005, () => console.log('Serving local files from ./dist directory at http://localhost:8005/'));