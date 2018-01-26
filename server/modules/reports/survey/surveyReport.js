//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
//https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#set-up-our-node-application-(package-json)

const questionService = require('../../../modules/question/questionService');
const securityService = require('../../../modules/security/security')();
const ObjectID = require("mongodb").ObjectID;
const renderer = require("../../renderer/renderer")();
const email = require("../../email/email")();
var fs = require('fs');

module.exports = function() {
  const surveyReportTemplatePath = "./modules/reports/survey/surveyTemplate.html";

  var models = {
    createReport: async function(filter) {
      // data.userId
      // data.categoryId
      // questionService

      // const question = await mongoQuery.collection('question').insert(data);

      const data = {};
      data.userInfo = await securityService.findOne({filter:{_id: ObjectID(filter.userId)}});
      data.userInfo.name = data.userInfo.firstName || data.userInfo.email;

      console.log(data.userInfo);
      data.reportData = await questionService.checkAnswersForCategory(filter);

      console.log("reportData");
      // console.log(reportData);


      var htmlResult = renderer.render(surveyReportTemplatePath,data);
      fs.writeFile('message.html', htmlResult, function (err) {

        if (err) throw err;

        console.log('It\'s saved! in same location.');

      });
        // email.sendEmail(
        //   {
        //     to:"claudiu9379@yahoo.com",
        //     subject:"Survey",
        //     body:htmlResult
        //   }
        // );
      return htmlResult;

    }
  };
  return models;
}
