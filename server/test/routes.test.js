// require the Koa server
const server = require("../server_koa_2");
// require supertest
const request = require("supertest");
// close the server after each test

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndInteger(max) {
  return Math.floor(Math.random() * max);
}

function randomCharacters()
{
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }

// then to call it, plus stitch in '4' in the third group
  guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
  return guid;
}
function generateEmail() {

  return randomCharacters()+ "@test.com";
}

function generatePassword() {

  return "pass -" +randomCharacters();
}

var token = null;

afterEach(() => {
  server.close();
});
describe("routes: index", () => {
  test("should generatePassword", async() => {
    const response = generatePassword();
    expect(response).not.toEqual("");
  });

  test("should respond as expected", async() => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    //expect(response.type).toEqual("application/json");
    // expect(response.type).toEqual("text/html");
    //expect(response.body.data).toEqual("Sending some JSON");
  });

  test("ping-me", async() => {
    const response = await request(server).post("/api/ping-me");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    // expect(response.body).toEqual({ message: "ping" });
  });

  test("ping", async() => {
    const body = {
      'id': 1,
      'name': 'Mike'
    };
    const response = await request(server).post("/api/ping").send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    // expect(response.type).toEqual("text/html");
    // expect(response.body).toEqual(body);
  });



  test("create user - no email", async() => {
    const body = {

    };
    const response = await request(server).post("/api/security/createUser").send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    // expect(response.type).toEqual("text/html");
    expect(response.body.message).toEqual("no_email");
    expect(response.body.success).toEqual(false);
  });

  test("create user - no password", async() => {
    const body = {
      email: generateEmail()
    };
    const response = await request(server).post("/api/security/createUser").send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    // expect(response.type).toEqual("text/html");
    expect(response.body.message).toEqual("no_password");
    expect(response.body.success).toEqual(false);
  });

  test("create user", async() => {
    const body = {
      email: generateEmail(),
      password: generatePassword(),
      sendEmail: false
    };

    const response = await request(server).post("/api/security/createUser").send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    // expect(response.type).toEqual("text/html");


    expect(response.body.message).toEqual(null);
    expect(response.body.success).toEqual(true);
  });

  test("create user used for tests", async() => {
    const body = {
      email: "test@test.com",
      password: "test",
      sendEmail: false
    };

    const response = await request(server).post("/api/security/createUser").send(body);
    expect(response.status).toEqual(200);

  });

});




var auth = {};

function loginUser() {
  return async function() {
    const body = {
      login: "test@test.com",
      password: "test",
      sendEmail: false
    };
    const response = await request(server).post("/api/security/login").send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    // expect(response.type).toEqual("text/html");


    expect(response.body.message).toEqual("");
    expect(response.body.success).toEqual(true);


    token = response.body.data.token;
  };
}



describe("routes: question", () => {
  beforeEach(async() => {
    var callLogin = async() => {
      try {
        const body = {
          login: "test@test.com",
          password: "test",
          sendEmail: false
        };
        const response = await request(server).post("/api/security/login").send(body);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual("application/json");
        // expect(response.type).toEqual("text/html");
// console.log(response.body);

        expect(response.body.message).toEqual(null);
        expect(response.body.success).toEqual(true);


        token = response.body.data.token;
        // done();
      } catch (error) {
        console.log(error);
      }
    };
    await callLogin();

  });

  const question = {
    //"_id": ObjectId("5a5c5e6edebe7f20c851349a"),
    "question": "<p>dddhkgi</p>",
    "questionType": 10,
    "answerCount": 4,
    "answers": [{
        "index": 0,
        "content": "unu"
      },
      {
        "index": 1,
        "content": "<p>doigugi</p>"
      },
      {
        "index": 2,
        "content": "<p>treigjg</p>"
      },
      {
        "index": 3,
        "content": "<p>patrugjgfk</p>"
      }
    ],
    "timer": {
      "enabled": false,
      "secStart": 0,
      "countUp": false,
      "running": false,
      "seconds": 0,
      "up": true
    },
    "testCasesStr": "{\"list\":[{\"param\":5,\"expected\":false},{\"param\":8,\"expected\":true}]}",
    "testCases": {
      "list": [{
          "param": 5,
          "expected": false
        },
        {
          "param": 8,
          "expected": true
        }
      ]
    },
    "code": "\n\n\nfunction run()\n{\n//write the code...\n}",
    "answerType": {
      "type": 1,
      "isCorrect": -1,
      "correctAnswers": []
    },
    "guid": "3685ea92-2191-4ee6-a260-bd2306357089",
    "userId": "5a454e7cebcd1a42f0b70cc9"
  };

  test("add question", async() => {
    const body = {};
    body.proxy = {
      module: 'question',
      method: 'add_edit',
    };
    body.data = question;
    const response = await request(server).post("/api/question")
      .set('authorization', token)
      .send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");

  });

  var getQuestion = async(filterCriteria) => {
    try {
      const body = {
        proxy: {
          module: 'question',
          method: 'getQuestion',
        },
        data: {
        	filter: filterCriteria
        }
      };
      const response = await request(server).post("/api/question").set('authorization', token).send(body);
      return response.body.data;


    } catch (error) {
      console.log(error);
    }
  };

  test("add answer for question", async() => {

  	const dbQuestion = await getQuestion({questionType:10});
    const body = {
      proxy: {
        module: 'question',
        method: 'storeAnswerForQuestion',
      },
      data: {
        qid: dbQuestion._id,
        body: {
          rdValue: 88
        }
      }
    };
    const response = await request(server).post("/api/question")
      .set('authorization', token)
      .send(body);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");

  });

test("add Category", async() => {
const body = {};
  body.proxy = {
  module: 'question',
  method: 'addEditCategory',
};
body.data = {
  name:generatePassword(),
  desc: generatePassword(),
  parentId:null

};

const response = await request(server).post("/api/question")
  .set('authorization', token)
  .send(body);
expect(response.status).toEqual(200);
expect(response.type).toEqual("application/json");

});

test("get categories", async() => {
  const body = {};
body.proxy = {
  module: 'question',
  method: 'getCategories',
};
body.data = {

};

const response = await request(server).post("/api/question")
  .set('authorization', token)
  .send(body);
expect(response.status).toEqual(200);
expect(response.type).toEqual("application/json");

});


test("get questions", async() => {
  const body = {};
body.proxy = {
  module: 'question',
  method: 'getQuestions',
};
body.data = {

};

const response = await request(server).post("/api/question")
  .set('authorization', token)
  .send(body);
expect(response.status).toEqual(200);
expect(response.type).toEqual("application/json");
expect(response.body.success).toEqual(true);

});


test("add edit category", async() => {
  const body = {};
body.proxy = {
  module: 'question',
  method: 'addEditCategory',
};
body.data = {
  name:generatePassword(),
  desc: generatePassword(),
  parentId:null

};

const response = await request(server).post("/api/question")
  .set('authorization', token)
  .send(body);
expect(response.status).toEqual(200);
expect(response.type).toEqual("application/json");

});

});
