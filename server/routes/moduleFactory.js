const newsService = require('../modules/news/newsService');


function getModule(name) {
  console.log(name);
  switch (name){
    case 'news':{
      return newsService;
      break;
    }
  }

};

module.exports.getModule = (name) => getModule(name);
