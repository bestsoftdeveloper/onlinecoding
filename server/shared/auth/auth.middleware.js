const jwt = require('jsonwebtoken');
const config = require('../../config/development');

class AuthMiddlewareService {
    constructor() {
    }

    getAuthMiddleware() {
        return function *authMiddleware(next) {
          console.log('xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            const authHeader = this.headers['x-access-token'];
            console.log(authHeader);
            if (!authHeader) {
                // if no token is present require authentication
                throw(401, 'Authentication required');
            }
            this.state = this.state || {};

            const authHeaderParts = authHeader.split(' '); // authorization header should be form 'Bearer [token]'
            const token = authHeaderParts.length && authHeaderParts[1];

            jwt.verify(token, config.tokenPassword, (err, decoded) => {
                if(err)
                {
                    throw(403, 'You are not authorized');
                }
                this.state.tokenObj = decoded;
            });

            yield next;
        };
    }

    tokenParserMidleware() {

        return function *authMiddleware(next) {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            const authHeader = this.headers['x-access-token'];
            //console.log(authHeader);
            if (!authHeader) {
                // if no token is present require authentication
               return yield next;
            }
            this.state = this.state || {};

            try {
                var r = yield jwt.verify(authHeader, config.tokenPassword);
                console.log("token ok");
                //console.log(r);
                this.state.tokenObj = r;
            }
            catch (ex)
            {
                console.log(ex);
            }
            // yield jwt.verify(authHeader, config.tokenPassword, (err, decoded) => {
            //     if(err)
            //     {
            //         console.log(err);
            //         this.throw(403, 'You are not authorized');
            //     }
            //     console.log("ggggggggggggggggggggggggggggg");
            //     console.log(decoded);
            //     this.state.tokenObj = decoded;
            // });

            yield next;
        };
    }

}

module.exports = new AuthMiddlewareService();
