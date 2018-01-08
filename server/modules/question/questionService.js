
const mongoQuery = require('../../utils/mongoQuery')();
const ObjectID = require("mongodb").ObjectID;

class QuestionService {

  async add_edit(ctx, data, query={}) {
    console.log("YEEEEEEEEEEEEEEEEEEE");


  if(data._id) {
    data._id = ObjectID(data._id);

    await mongoQuery.collection('question').remove({_id:data._id});
  }

    const question = await  mongoQuery.collection('question').insert(data);
    return {_id: question.ops[0]._id};
  }

  async storeAnswerForQuestion(ctx, data, tokenObj) {
    data.userId = tokenObj.id;
    const questionResponse  = await mongoQuery.collection('questionResponses').insert(data);
    return {od:"da"};
  }

  async form(ctx, data, query={}) {
    console.log("YZZZZZZZZZZ");

    const question  = await mongoQuery.collection('question').insert(data);
    // question._id = question.ops[0]._id;

    return {_id: question.ops[0]._id};
  }

  async evaluation(ctx, obj, query={}) {
    console.log(obj.pager);
  debugger;
    var filter = mongoQuery.collection('question').find({});

    if (obj.pager) {
      obj.pager.itemsOnPage = parseInt(obj.pager.itemsOnPage);
      obj.pager.pageNo--;
      filter = filter.limit(obj.pager.itemsOnPage)
      .skip(obj.pager.itemsOnPage * obj.pager.pageNo)
      // query = query.sort({
      //   dateAdded: -1
      // });
  }
debugger;
  const questions  = await filter.toArray();
  console.log(questions);
  const count = await mongoQuery.collection('question').count(query);
  return {
    items: questions,
    count
  };
}

  * add_edit1(ctx, data, query={}) {
    console.log("YEEEEEEEEEEEEEEEEEEE");
    const dataResponse = yield ctx.app.question.insert(data);

    return dataResponse;
  }

  * getCustomers(tenant,query={}) {
    query.tenantId = tenant.tenantId;
    query.active=true;
    return query;
  }
}

module.exports = new QuestionService();
