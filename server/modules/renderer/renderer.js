//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
//https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#set-up-our-node-application-(package-json)

const swig = require('swig');
var logger = require("./../logger/logger.js")();

module.exports = function() {

    var models = {
        render: function(templatePath, obj) {
            logger.log("ok");

            var htmlResult = swig.renderFile(templatePath, obj);
            
            return htmlResult;

        }
    };
    return models;
}