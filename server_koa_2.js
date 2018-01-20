const koa = require('koa');
const http = require('http');
const https = require('https');
var forceSSL = require('koa-force-ssl');
const lcPrivateRoutes = require('./server/routes/private.routes');
const lcPublicRoutes = require('./server/routes/public.routes');

const lcRouter = require('koa-router')();

const errorCatcher = require('./server/shared/error-handling/errorCatcher');

const parse = require('co-body');
const koaBody = require('koa-body');
const co = require('co');
const fs = require('fs');
const colors = require('colors');
const utils = require('./server/shared/utils');
var io = require('socket.io');

const logger = require('koa-logger');
const ObjectID = require("mongodb").ObjectID;
const BodyParser = require("koa-bodyparser");
// const staticServe = require('koa-static');
const  config =  require('./server/config/development');
const serve = require('koa2-static-middleware');
var serveFolder = require('koa-static-folder');

const cors = require('koa-cors');
const app = new koa();
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
require("./server/mongo/mongo")(app);

var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
  'http://www.myproductionurl.com'
];
// var corsOptions = {
//   origin: function(origin, callback){
//     console.log("or");
//     var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//     callback(null, isWhitelisted);
//   },
//   credentials:true
// }
//here is the magic
app.use(cors());

app.use(logger());
// app.use(errorCatcher);
app.use(BodyParser());
//app.use(staticServe(config.staticPath));

const mongoQuery = require('./server/utils/mongoQuery')();


// lcRouter.use('/api', lcPrivateRoutes);
lcRouter.use(lcPublicRoutes.routes());

app.use(lcRouter.routes()).use(lcRouter.allowedMethods());

lcRouter.post("/people", async (ctx) => {
  return await ctx.app.people.insert(ctx.request.body);
});

// lcRouter.get("/", async function (ctx) {
//   await send(ctx, ctx.path, { root: __dirname + '/public' })
// });

app.use(serveFolder('src'));
app.use(serveFolder('node_modules'));
app.use(serveFolder('src/js'));
lcRouter.get('/', serve('./src', { index: 'index.html' }));
// lcRouter.get('/assets/*', serve('./dist', { index: 'index.html' }));

console.log(lcRouter.stack.map(i => i.path));

const port =  6002;
const server = app.listen(port).on("error", err => {
    console.error(err);
});
module.exports = server;
