const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");
const logger = require('koa-logger');
const ObjectID = require("mongodb").ObjectID;

const app = new Koa();
const router = new Router();
const securedRouter = new Router();

const userRoutes = require("./routes/users");
const jwt = require("./jwt/jwt");

require("./mongo/mongo")(app);

//securedRouter.use(jwt.errorHandler()).use(jwt.jwt());

// Use the bodyparser middlware
app.use(BodyParser());
app.use(logger());

router.post("/auth", async (ctx) => {
  let username = ctx.request.body.username;
let password = ctx.request.body.password;

if (username === "user" && password === "pwd") {
  ctx.body = {
    token: jwt.issue({
      user: "user",
      role: "admin"
    })
  }
} else {
  ctx.status = 401;
  ctx.body = {error: "Invalid login"}
}
});

router.get("/", async function (ctx) {
    ctx.body = {message: "Hello World!"}
});

router.get("/api/me", async function (ctx) {
  ctx.body = {message: "Hello World ddddddddd!"}
});

securedRouter.get("/", async function (ctx) {
  let name = ctx.request.query.name || "World";
  ctx.body = {message: `Hello ${name}!`}
});

securedRouter.post("/", async function (ctx) {
  let name = ctx.request.body.name || "World";
  ctx.body = {message: `Hello ${name}!`}
});

securedRouter.get("/people", async (ctx) => {
  ctx.body = await ctx.app.people.find().toArray();
});

// Get one
securedRouter.get("/people/:id", async (ctx) => {
  ctx.body = await ctx.app.people.findOne({"_id": ObjectID(ctx.params.id)});
});

// Create new person
securedRouter.post("/people", async (ctx) => {
  ctx.body = await ctx.app.people.insert(ctx.request.body);
});

// Update one
securedRouter.put("/people/:id", async (ctx) => {
  let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
let valuesToUpdate = ctx.request.body;
ctx.body = await ctx.app.people.updateOne(documentQuery, valuesToUpdate);
});

// Delete one
securedRouter.delete("/people/:id", async (ctx) => {
  let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
ctx.body = await ctx.app.people.deleteOne(documentQuery);
});

app.use(router.routes()).use(router.allowedMethods());
app.use(securedRouter.routes()).use(securedRouter.allowedMethods());

app.use(userRoutes.routes()).use(userRoutes.allowedMethods());

console.log(router.stack.map(i => i.path));

app.listen(6002);
