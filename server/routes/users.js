const Router = require("koa-router");
const usersRouter = new Router();

usersRouter.get('/mee', function *getUserHandler(){
  this.status = 200;
  this.body = 'me';
});

usersRouter.get("/me1", async function (ctx) {
  ctx.body = {message: "Hellome1me1me1me1me1me1me1me1me1me1me1me1me1!"}
});

module.exports = usersRouter;
