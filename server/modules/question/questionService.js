const mongoQuery = require('../../utils/mongoQuery')();
const ObjectID = require("mongodb").ObjectID;

QuestionType =
{
  Text: 1,
  Image: 2,
  Code: 3
};
AnswerType =
{
  SingleAnswer: 1,
  MultipleAswers: 2,
};
class QuestionService {

  async add_edit(ctx, data, query = {}) {
    // console.log("YEEEEEEEEEEEEEEEEEEE");
    // console.log(data);

    var findCriteria = {};
    if (data._id) {
      findCriteria._id = ObjectID(data._id);
    } else {
      findCriteria._id = new ObjectID();
    }
    var setCriteria = {
      '$set': {
        categoryId:data.categoryId,
        question: data.question,
        questionType: data.questionType,
        answerCount: data.answerCount,
        answers: data.answers,
        timer: data.timer,
        testCasesStr: data.testCasesStr,
        testCases: data.testCases,
        code: data.code,
        answerType: data.answerType,
        guid: data.guid,
        userId: data.userId
      }
    }

    var dbQuestion = await mongoQuery.questionSchema.Question.update(findCriteria, setCriteria, {
      upsert: true
    });
    return dbQuestion;
  }

  async addEditCategory(ctx, data, query = {}) {
  // console.log("YEEEEEEEEEEEEEEEEEEE");
  console.log(data);

  var findCriteria = {};
  if (data._id) {
    findCriteria._id = ObjectID(data._id);
  } else {
    findCriteria._id = new ObjectID();
  }
  var setCriteria = {
    '$set': {
      name: data.name,
      desc: data.desc,
      parentId: data.parentId,
      answers: data.answers,
      addedDate:new Date()
    }
  }

  var dbQuestionCategory = await mongoQuery.questionCategorySchema.QuestionCategory.update(findCriteria, setCriteria, {
    upsert: true
  });
  return dbQuestionCategory;
  // bulk.find({
  //   _id: new mongo.ObjectID(_id)
  // }).upsert().updateOne(
  //   body
  // );

  return;
  if (data._id) {
    data._id = ObjectID(data._id);

    await mongoQuery.collection('question').remove({ _id: data._id });
  }

  //const question = await  mongoQuery.collection('question').insert(data);
  const question = await aaa.save();
  return { _id: question.ops[0]._id };
}

  async getCategories(ctx, data, tokenObj) {
    //data.userId = tokenObj.id;
  const filterCriteria = data.filter || {};
  const doc = await mongoQuery.questionCategorySchema.QuestionCategory.find(filterCriteria);
    return doc;
}


  async storeAnswerForQuestion(ctx, data, tokenObj) {
    data.userId = tokenObj.id;
    const resp = await mongoQuery.questionSchema.Question.update(
    	{ _id: data.qid },
    	{ $push: { userAnswers: data } });

    // console.log(resp);
    return resp;



    // const doc = mongoQuery.collection('questionResponses');
    // const existentAnswer = await doc.findOne({
    //   userId: data.userId,
    //   qid: data.qid
    // });

    // if (existentAnswer) {
    //   return {
    //     ok: false
    //   }
    // }
    // const questionResponse = await doc.insert(data);
    // return { ok: true };
  }

  async getQuestion(ctx, data, tokenObj) {
  if(!data.userId) {
    data.userId = tokenObj.id;
  }

    // console.log(data);
    const doc = mongoQuery.collection('questions');
    const question = await doc.findOne(data.filter,
    {categoryId:1,question:1,questionType:1,answerCount:1,answers:1,timer:1,testCasesStr:1,
      testCases:1,code:1,answerType:1,guid:1,userId:1,userAnswers:{$elemMatch: {userId: data.userId}}}
    );
  // console.log(question);
    return question;
  }




  async getAnswerForQuestion(ctx, data, tokenObj) {
    // console.log(data);
    data.userId = tokenObj.id;
    const doc = mongoQuery.collection('questionResponses');
    const existentAnswer = await doc.findOne({
      userId: data.userId,
      qid: data.qid
    });

    return existentAnswer.body;
  }



  async form(ctx, data, query = {}) {
    // console.log("YZZZZZZZZZZ");

    const question = await mongoQuery.collection('question').insert(data);
    // question._id = question.ops[0]._id;

    return { _id: question.ops[0]._id };
  }

  async getQuestions(ctx, obj, tokenObj) {
    // console.log(obj.pager);
    // debugger;

  const filterCriteria = {};
  if(obj.filter)
  {
    if(obj.filter.categoryId)
    {
      filterCriteria.categoryId = ObjectID(obj.filter.categoryId);
    }
  }

  const fields = {categoryId:1,question:1,questionType:1,answerCount:1,answers:1,timer:1,testCasesStr:1,
    testCases:1,code:1,answerType:1,guid:1,userId:1,userAnswers:{$elemMatch: {userId: tokenObj.id}}};
    var filter = mongoQuery.questionSchema.Question
      .find(filterCriteria)
      .select(fields);


    if (obj.pager) {
      obj.pager.itemsOnPage = parseInt(obj.pager.itemsOnPage);
      obj.pager.pageNo--;
      filter = filter.limit(obj.pager.itemsOnPage)
        .skip(obj.pager.itemsOnPage * obj.pager.pageNo)
      // query = query.sort({
      //   dateAdded: -1
      // });
    }
    // debugger;
    const questions = await mongoQuery.executeQuery(filter);

    // console.log(questions);
    const count = await mongoQuery.collection('questions').count(filterCriteria);
    return {
      items: questions,
      count: count,
      pageNo: obj.pager ? obj.pager.pageNo + 1 : 0
    };
  }


  async checkAnswersForQuestion(ctx, data, tokenObj) {
  // console.log(data);
  // data.userId = tokenObj.id;
  // data.questionId

  let  question = await getQuestion(ctx,data,tokenObj);
  let newQuestion = checkAnswers(question);

  return newQuestion;
}

  checkAnswers(question) {

    question.showAnswers = true;

    const answerTypeObj = question.answerType;


    switch (question.questionType) {
      case QuestionType.Text:
      case QuestionType.Image: {
        question.answers.forEach(it=> delete it.correctAswered);

        switch (question.answerType.type) {
          case this.AnswerType.SingleAnswer: {
            let selectedOption = question.rdValue;
            if (isUndefined(selectedOption) && question.userAnswer) {
              selectedOption = question.userAnswer.rdValue;
            }
            if (isUndefined(selectedOption)) {
              break;
            }
            const selectedAnswer = question.answers.find(it => it.index === selectedOption);
            if (isUndefined(question.rdValue)) {
              question.rdValue = selectedOption;
            }
            if (answerTypeObj.isCorrect < 0) {
              break;
            }

            question.answers[answerTypeObj.isCorrect].isCorrect = true;
            question.correctAswered = selectedOption == answerTypeObj.isCorrect;

            selectedAnswer.correctAswered = answerTypeObj.isCorrect == selectedAnswer.index;

            break;
          }

          case this.AnswerType.MultipleAswers: {
            debugger;
            let correctAswered = true;
            for (var i = 0; i < question.answers.length; i++) {

              let ans = question.answers[i];
              if (question.userAnswer) {
                const checkedAnswers = question.userAnswer.checkedAnswers;
                const checked = checkedAnswers.find(it=>it.index === ans.index);
                ans.rdValue = checked != null;
              }

              if (!isUndefined(ans.isCorrect)) {
                if (ans.isCorrect && !ans.rdValue) {
                  correctAswered = false;
                }

                if (!ans.isCorrect && ans.rdValue) {
                  correctAswered = false;
                }
              }

            }

            question.correctAswered = correctAswered;

            break;
          }
        }

        break;
      }
      case QuestionType.Code: {
        break;
      }
    }
    for (var i = 0; i < question.answers.length; i++) {
      let ans = question.answers[i];

      switch (question.answerType.type) {
        case this.AnswerType.SingleAnswer: {
          const selectedOption = answerTypeObj.rdValue;
          question.correctAswered = selectedOption == answerTypeObj.isCorrect;

          break;
        }
        case this.AnswerType.MultipleAswers: {
          break;
        }
      }
    }

    question.isDisabled = true;
  }


}

module.exports = new QuestionService();
