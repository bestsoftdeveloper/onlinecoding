//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
//https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#set-up-our-node-application-(package-json)

var logger = require("./../logger/logger.js")();
const questionService = require('../../../modules/question/questionService');
const renderer = require("../../renderer/renderer")();

module.exports = function() {
  const surveyReportTemplatePath = "";

  var models = {
    createReport: function(data) {
      // data.userId
      // data.categoryId
      // questionService

      // const question = await mongoQuery.collection('question').insert(data);

      const reportData = questionService.getQuestions(data);

      var htmlResult = renderer.render(surveyReportTemplatePath,reportData);

      return htmlResult;

    }
  };
  return models;
}
