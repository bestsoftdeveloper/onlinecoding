const router = require('koa-router')();
const authMiddleware = require('../shared/auth/auth.middleware').tokenParserMidleware();
const koabusBoy = require('co-busboy');
const responseWrapper = require('../utils/responseWrapper')();
const parse = require('co-body');

router
    .prefix('/apip')
    .use(authMiddleware)

    .post('/test',  async function (ctx) {
        const body = ctx.request.body;
        ctx.body = {ok:true};
    })
    .post('/transaction/:id', function *() {
        this.state.body = yield parse.json(this);
        const body = this.state.body;

        if(this.state.tokenObj)
        {
            body.tokenObj = this.state.tokenObj;
        }
        this.body = yield transactionModule[this.params.id](body);
    });

module.exports = router.routes();
