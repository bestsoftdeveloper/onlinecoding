const mongoQuery = require('../../utils/mongoQuery')();
const ObjectID = require("mongodb").ObjectID;
const coreUtils = require('../../utils/core.utils')();

class NewsService {

  async add_edit(data, query = {}) {

  console.log(data);
  var findCriteria = {};
  if (data._id) {
    findCriteria._id = ObjectID(data._id);
  } else {
    findCriteria._id = new ObjectID();
  }
  // const newsData = data.date? new Date(data.date) : new Date();
  // const date = coreUtils.toDateTimeInfo(newsData);
  //  data.date.mili = coreUtils.toDateTimeInfo(data);
  // date.date = date.date.toISOString();

  var setCriteria = {
    '$set': {
      // categoryId:data.categoryId,
      title: data.title,
      newsType: data.newsType,
      date: data.date,
      items: data.items,
      timer: data.timer,
      userId: data.userId,
      parent: data.parent
    }
  }

  var dbNews = await mongoQuery.collection('news').update(findCriteria, setCriteria, {
    upsert: true
  });

  console.log(dbNews);
  return dbNews;
}

  async addItemForNews(data, tokenObj) {
  data.userId = tokenObj.id;
  const resp = await mongoQuery.collection('news').update(
    { _id: data._id },
    { $push: { items: data } });

  // console.log(resp);
  return resp;
}

  async getNews(data, tokenObj) {
  console.log(data);

  const filterCriteria = {};
  if(data.filter)
  {
    filterCriteria.newsType = {$eq:data.filter.newsType};
    if(data.filter.date)
    {
      // const filterDate = new Date(data.filter.date);
      // const isoDate = new Date(filterDate.toISOString());

      filterCriteria["date.jsdate"]= { $lte: data.filter.date};
      // filterCriteria["date.mili"]= { $lte: data.filter.mili};
    }

  }
  // data.userId = tokenObj.id;
  const query = mongoQuery.newsSchema.News
  //const query = mongoQuery.collection('news')
    .findOne(filterCriteria).sort({ "date.jsdate":-1 });//
  // .populate('title');

  const resp = await query; //mongoQuery.executeQuery(query);

  console.log(resp);
  return resp;
}

}

module.exports = new NewsService();
