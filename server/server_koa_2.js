const koa = require('koa');
const http = require('http');
const https = require('https');
var forceSSL = require('koa-force-ssl');
const lcPrivateRoutes = require('./routes/private.routes');
const lcPublicRoutes = require('./routes/public.routes');
const routesQuestion = require('./routes/routes.question');

const lcRouter = require('koa-router')();

const errorCatcher = require('./shared/error-handling/errorCatcher');

const parse = require('co-body');
const koaBody = require('koa-body');
const co = require('co');
const fs = require('fs');
const colors = require('colors');
const utils = require('./shared/utils');
var io = require('socket.io');
const path = require('path');
const send = require('koa-send');
const asyncBusboy = require('async-busboy');

const logger = require('koa-logger');
const ObjectID = require("mongodb").ObjectID;
const BodyParser = require("koa-bodyparser");
const staticServe = require('koa-static');
const  config =  require('./config/development');
const serve = require('koa2-static-middleware');
const cors = require('@koa/cors');
const app = new koa();

//import serve from 'koa-static-folder';
var formidable = require('koa2-formidable');


require("./mongo/mongo")(app);

var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
  'http://www.myproductionurl.com'
];

app.use(cors());
  //app.use(koaBody({ multipart: true }));
app.use(logger());
app.use(errorCatcher);
app.use(BodyParser());
app.use(cors());



// app.use(function *(){
//   this.set('Access-Control-Allow-Origin', '*');
// });

// app.use(async (ctx, next) => {
//   try {
//
//     await next() // next is now a function
//   } catch (err) {
//     ctx.body = { message: err.message }
//     ctx.status = err.status || 500
//   }
// })


const mongoQuery = require('./utils/mongoQuery')();

//app.use(serve(path.join(__dirname, '/uploads')));// it should work
// lcRouter.use('/api', lcPrivateRoutes);
lcRouter.use(lcPublicRoutes.routes());
lcRouter.use(routesQuestion.routes());

app.use(lcRouter.routes()).use(lcRouter.allowedMethods());

lcRouter.post("/people", async (ctx) => {
  ctx.body = await ctx.app.people.insert(ctx.request.body);
});

// lcRouter.get("/", async function (ctx) {
//   await send(ctx, ctx.path, { root: __dirname + '/public' })
// });

lcRouter.get('/', serve('../src', { index: 'index.html' }));
// lcRouter.get('/uploads', serve('uploads'));

lcRouter.get("/uploads/:id", async function (ctx) {
  //console.log("uploads"+ctx.params.id + " " +ctx.path);
  // serve("uploads/"+ctx.params.id);
  await send(ctx, ctx.path);
});


console.log(lcRouter.stack.map(i => i.path));

const port =  6002;
const server = app.listen(port).on("error", err => {
    console.error(err);
});
module.exports = server;
