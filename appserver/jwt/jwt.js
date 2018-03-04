// Import jsonwebtoken
const jsonwebtoken = require("jsonwebtoken");

const jwt = require("koa-jwt");

const config = require('../config/development');
const SECRET = "S3cRET~!";
const jwtInstance = jwt({secret: SECRET});

function JWTErrorHandler(ctx, next) {
  return next().catch((err) => {
      if (401 == err.status) {
    ctx.status = 401;
    ctx.body = {
      "error": "Not authorized"
    };
  } else {
    throw err;
  }
});
};

async function routeJwtMiddleware(ctx, next) {
  var authHeader = ctx.req.headers.authorization;
  // console.log(ctx.req.headers);
  var r = await jsonwebtoken.verify(authHeader, config.tokenPassword);
  ctx.request.body.tokenObj = r;

  return next().catch((err) => {
      throw err;
  });
};

// helper function
module.exports.issue =  (payload) => {
  return jsonwebtoken.sign(payload, SECRET);
};
module.exports.jwt = () => jwtInstance;
module.exports.errorHandler = () => JWTErrorHandler;
module.exports.routeJwtMiddleware = () => routeJwtMiddleware;
