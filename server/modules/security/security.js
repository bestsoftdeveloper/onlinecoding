//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
//https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#set-up-our-node-application-(package-json)


var q = require('q');
var logger = require("./../logger/logger.js")();
var co = require('co');
var mongo = require('mongodb');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const cryptoJS = require('node-cryptojs-aes').CryptoJS;
const encryption = require('../../utils/encryption')(cryptoJS, uuid);
const email = require('../email/email')();
const utilsService = require('../../utils/core.utils')();

const mongoQuery = require('../../utils/mongoQuery')();


const responseWrapper = require('../../utils/responseWrapper')();
const  config =  require('../../config/development');

module.exports = function() {
    var models = {
         async login(obj) {
            // console.log(obj);
            if(!obj || !obj.login || !obj.password)
            {
                throw {message:"invalid_password"};
                //return responseWrapper.sendResponse(false, null, "invalid_password", "");
            }
            //logger.log(mongoQuery);
            logger.log(JSON.stringify(obj).green);
            // var query = mongoQuery.userSchemas.Users.find({
            //     $or: [{
            //         'name': obj.Login
            //     }, {
            //         'email': obj.Login
            //     }]
            // });
            var userCrit =  mongoQuery.userSchemas.Users.findOne({
                email: obj.login.toLowerCase()
            });
            // console.log("user8888888888888888888888");
            var user = await mongoQuery.executeQuery(userCrit);
            // console.log("u");
            // console.log(user);
            if(!user)
            {
              throw {message:"invalid_password1"};
                //return responseWrapper.sendResponse(false, null, "invalid_password1", "");
            }
            if(!obj.password)
            {
              throw {message:"invalid_password2"};
                //return responseWrapper.sendResponse(false, null, "invalid_password2", "");
            }

            var password = encryption.encrypt(obj.password, user.salt);

            //logger.log(password + " -- " + user.password);

            if (password != user.password) {
              throw {message:"invalid_password3"};
                // return responseWrapper.sendResponse(false, null, "invalid_password3", "");
            }

            var userResponse = models.createUserResponse(user);
    return userResponse;

            //return responseWrapper.sendResponse(true, userResponse, "", "");
        },

         getUserFromToken(obj) {
            // console.log("fffffffffffffffffff");
            if(!obj)
            {
              throw {message:"invalid_request"};
                // return responseWrapper.sendResponse(false, null, "invalid_request", "");
            }

            var user =  mongoQuery.userSchemas.Users.findOne({
                '_id': obj.id
            });

            return user;
        },
  async loginfb(obj) {
    debugger;
    // console.log("ddddddddddddd");
    // console.log(JSON.stringify(obj));
    if(!obj || !obj.email)
    {
      throw {message:"invalid_request"};
      //return responseWrapper.sendResponse(false, null, "no_email", "");
    }
    if(!obj.password)
    {
      obj.password = "fromfb";
    }
    //
    // console.log("dddddddddddddddddddddd");
    // console.log(obj);
    obj.email = obj.email.toLowerCase();

    // console.log(mongoQuery.userSchemas.Users);
    var existentUserCriteria = mongoQuery.userSchemas.Users.findOne({
      'email': obj.email
    });

    const existentUser = await  mongoQuery.executeQuery(existentUserCriteria);
    if (existentUser) {
      var userResponse = models.createUserResponse(existentUser);
      return userResponse;
    }

    var salt = encryption.salt();
    var encryptedPassword = encryption.encrypt(obj.password, salt);
    // console.log("4");
    var dbUser = new mongoQuery.userSchemas.Users({
      name: obj.login,
      email: obj.email,
      password: encryptedPassword,
      salt: salt,
      //guid: encryption.guid(),
      langId: obj.langId,
      confirmed: false,
      reset: encryption.guid(),
      amount: {
        value: 10
      }
    });
    // console.log("5");

    // console.log("aici " + JSON.stringify(dbUser));

    await dbUser.save();
    logger.log('User saved successfully!');

    dbUser.langId = obj.langId;
    email.emailCreateUser(dbUser);

    return await models.login({
      login: obj.email,
      password: obj.password
    });
  },
         async createUser(obj) {
            debugger;
            // console.log(JSON.stringify(obj));
            if(!obj || !obj.email)
            {
              throw {message:"no_email"};
            }
            if(!obj.password)
            {
              throw {message:"no_password"};
            }
            obj.email = obj.email.toLowerCase();

              var existentUserCriteria = mongoQuery.userSchemas.Users.findOne({
                'email': obj.email
              });

             const existentUser = await  mongoQuery.executeQuery(existentUserCriteria);
              if (existentUser) {
                throw {message:"email_used"};
              }

            var salt = encryption.salt();
            var encryptedPassword = encryption.encrypt(obj.password, salt);
            var dbUser = new mongoQuery.userSchemas.Users({
                name: obj.login,
                email: obj.email,
                password: encryptedPassword,
                salt: salt,
                //guid: encryption.guid(),
                langId: obj.langId,
                confirmed: false,
                reset: encryption.guid(),
                amount: {
                    value: 10
                }
            });

            await dbUser.save();

            dbUser.langId = obj.langId;
            if(obj.sendEmail == undefined)
            {
                email.emailCreateUser(dbUser);
            }
            return await models.login({
                login: obj.email,
                password: obj.password
            });
        },

        forgotPassword(obj){
            if(!obj || !obj.Email)
            {
              throw {message:"user_not_found"};
            }
            var dbUser =  mongoQuery.userSchemas.Users.findOne({
                'email': obj.Email.toLowerCase()
            });
            if(!dbUser)
            {
              throw {message:"user_not_found"};
            }
            dbUser.reset = encryption.guid();
            obj.reset = dbUser.reset;

            var r =  dbUser.save();
            // console.log(r);
            email.emailForgotPassword(obj, obj.Email);
            return   "check_forgot_password";
        },

        confirm(obj) {

            var dbUser =  mongoQuery.userSchemas.Users.findOne({
                _id: obj.id
            });
            if(!dbUser)
            {
              throw {message:"user_not_found"};
            }
            dbUser.confirmed = true;

             dbUser.save();

            return  "";
        },

        setUserCurrencyAddress(obj) {

            var prom =  mongoQuery.userSchemas.Users.update({
                _id: obj.id,
                'currency.name':obj.currecy
            }, {
                $set: {
                    'currency.address': obbbj.address
                }
            }, {
                upsert: true
            });

            var dbUser =  mongoQuery.userSchemas.Users.findOne({
                _id: obj.id
            });
            if(!dbUser)
            {
              throw {message:"user_not_found"};
            }
            dbUser.confirmed = true;

             dbUser.save();

            return "";
        },

         resetPassword(obj) {

            var dbUser =  mongoQuery.userSchemas.Users.findOne({
                reset: obj.Reset
            });
            if(!dbUser)
            {
              throw {message:"user_not_found"};
            }

            var salt = encryption.salt();
            var encryptedPassword = encryption.encrypt(obj.Password, salt);


            dbUser.reset = encryption.guid();
            dbUser.password = encryptedPassword;
            dbUser.salt = salt;

             dbUser.save();

            return "password_changed";
        },

         changePassword(obj) {
            // console.log("change pass");
            // console.log(obj);
            if (!obj.tokenObj) {
              throw {message:"invalid_token"};
            }
            var dbUser =  mongoQuery.userSchemas.Users.findOne({
                _id: obj.tokenObj.id
            });
            if(!dbUser)
            {
              throw {message:"invalid_password"};
            }

            var password = encryption.encrypt(obj.OldPassword, dbUser.salt);

            if (password != dbUser.password) {
              throw {message:"old_password_not_match"};
            }


            var salt = encryption.salt();
            var encryptedPassword = encryption.encrypt(obj.Password, salt);

            dbUser.reset = encryption.guid();
            dbUser.password = encryptedPassword;
            dbUser.salt = salt;

            var r =  dbUser.save();

            return  "password_changed";
        },

         updateProfile(obj) {
            logger.log("profile " + JSON.stringify(obj));

            if (!obj.tokenObj) {
                logger.log(" invalid_token");
                // console.log('1');
              throw {message:"invalid_token"};
            }
            // console.log('2');
            var dbUser =  mongoQuery.userSchemas.Users.findOne({
                _id: obj.tokenObj.id
            });

            // console.log('3');
            if(!dbUser)
            {
                // console.log('4');
              throw {message:"invalid_password"};
            }

            // console.log('5');
            let hasName = false;
            if(obj.firstName)
            {
                hasName= true;
                dbUser.firstName = obj.firstName;
            }

            if(obj.lastName)
            {
                hasName = true;
                dbUser.lastName = obj.lastName;
            }
            if(hasName)
            {
                dbUser.name = obj.firstName + " " + obj.lastName;
            }

            if(obj.nick) {
                dbUser.nick = obj.nick;
            }
            if(obj.phone) {
                dbUser.phone = obj.phone;
            }

            if(obj.genre) {
                dbUser.genre = obj.genre;
            }
            if(obj.offset)
            {
                dbUser.offset = obj.offset;
            }

            if(obj.birth)
            {
                dbUser.birth = obj.birth;
            }

            if(obj.files && obj.files.length>0)
            {
                const fileInfo = obj.files[0];
                dbUser.buletin.url =fileInfo.fName;
                dbUser.buletin.status = 0;
            }

            var r =  dbUser.save();
            var resp = "profile_updated";

            return resp;
        },

         acceptBuletin(obj) {
            //obj.userId
            //obj.msg
            //obj.status = 1

            logger.log("profile " + JSON.stringify(obj));

            if (!obj.tokenObj) {
                logger.log(" invalid_token");
                // console.log('1');
              throw {message:"invalid_token"};
              //return responseWrapper.sendResponse(false, null, "invalid_token", "");
            }

            const updateCriteria = {
                'buletin.$.status': 1
            };


            var r =  mongoQuery.userSchemas.Users.update({
                _id: new mongo.ObjectID(obj.userId),
                //_id:obj.userId
            }, {
                $set: updateCriteria
            })
            return "profile_updated";
            // var resp = responseWrapper.sendResponse(true, null, "profile_updated", "");

            // console.log(resp);
            // return resp;
        },

         denyBuletin(obj) {
            //obj.userId
            //obj.msg
            //obj.status = 1

            logger.log("profile " + JSON.stringify(obj));

            if (!obj.tokenObj) {
                logger.log(" invalid_token");
                // console.log('1');
              throw {message:"invalid_token"};
                // return responseWrapper.sendResponse(false, null, "invalid_token", "")
            }

            const updateCriteria = {
                'buletin.$.status': 0,
                'buletin.$.msg': obj.msg
            };


            var r =  mongoQuery.userSchemas.Users.update({
                //_id: new mongo.ObjectID(gridRecordId),
                _id:obj.userId
            }, {
                $set: updateCriteria
            })
            return "profile_updated";
            // var resp = responseWrapper.sendResponse(true, null, "profile_updated", "");

            // console.log(resp);
            // return resp;
        },

         checkToken(obj) {
            // console.log(obj);
            if (!obj.tokenObj) {
              return "";
                // return responseWrapper.sendResponse(true, null, "", "");
            }

            var r =  mongoQuery.userSchemas.Users.update({
                    _id: obj.tokenObj.id
                }, {
                    lld: new Date()

                }, {
                    multi: false
                }
            );

    return recordset;
            // return responseWrapper.sendResponse(true, recordset, "amt", "");

        },




         getUsersByIdsCo(idsArray)
        {

            var resp =  mongoQuery.userSchemas.Users.find(
                {
                    '_id': {
                        $in: idsArray
                    }
                }, "name email firstName lastName phone")
            return resp;
        },

        getUsersByIds: function (obj, res) {
            // {
            //     "method":"security/getUsersByIds",
            //     "ids":"58a95165a38d6c240984b10f,58c3b94224063d400e0fd0f4"
            // }
            var inst = this;
            co(function* getResults() {
                // console.log('getUsersByIds');
                var resp = [];
                if (obj.ids) {
                    var objectIds = [];
                    for (var x = 0; x < obj.ids.length; x++) {
                        // console.log(splitedIds[x]);
                        objectIds.push(new mongo.ObjectID(obj.ids[x]));
                    }
                    // console.log("aici");
                    resp =  inst.getUsersByIdsCo(objectIds);
                }

                return response.sendResponse(res, true, resp, "getUsersByIds", "");
            });
        },
        getUserByEmail: function (obj, res) {
            // {
            //     "method":"security/getUserByEmail",
            //     "email":"a@a.com"
            // }

            //mongoQuery.userSchemas.Users.findOne({'email':obj.email});
            // console.log(obj);
            mongoQuery.userSchemas.Users.findOne({
                    email: obj.email
                }, "name email firstName lastName phone",
                function (err, record) {
                    if (err) logger.log(err);
                    return response.sendResponse(res, true, record, "getUserByEmail", "");
                });

        },


        download: function (url) {
            var deferred = q.defer();
            https.get(url, function (res) {
                var data = "";
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on("end", function () {
                    // var jsObj = JSON.stringify(JSON.parse(data));
                    var jsObj = JSON.parse(data);
                    deferred.resolve(jsObj);
                });
            }).on("error", function () {
                deferred.resolve({
                    error: "ddsdfsdfsdf"
                });
            });
            return deferred.promise;
        },

        checkTokenLic: function (obj, res) {
            //this method will be used by liciatations
            if (!obj.tokenObj) {
                return response.sendResponse(res, true, null, "", "");
            }

            mongoQuery.userSchemas.Users.update({
                    _id: obj.tokenObj.id
                }, {
                    lld: new Date()

                }, {
                    multi: false
                },
                function (err, numberAffected) {
                    if (err) logger.log(err);
                    userNotification.getunotifsUI(obj, res);
                    //return response.sendResponse(res, false, null, "check token", "");
                });

        },
        createOwner: function (obj) {
            logger.log("create Owner " + JSON.stringify(obj));
            //method called when a record is read from web and this "service" must be associated with an owner;
            //e.g. a licitation has a executor and this executor must be added into the system
            //a new record must be added into the notification table in order to send an email to the owner that an account was created for him
            //obj must contain email, name or phone
            //the result must contain the _id of the owner

            var deferred = q.defer();
            var hasEmail = false;
            var crit = {};
            if (obj.email) {
                hasEmail = true;
                crit.email = obj.email.toLowerCase();
            } else {
                crit.phone = obj.phone;
            }
            debugger;
            var query = mongoQuery.userSchemas.Users.find(crit);

            mongoQuery.executeQuery(query)
                .then(function (recordset) {
                    if (recordset.length == 0) {
                        //1.create the record
                        var salt = encryption.salt();
                        var rand4Digiths = "12345"; // utilsService.randCharacters();
                        var encryptedPassword = encryption.encrypt(rand4Digiths, salt);

                        var newOwner = {
                            email: obj.email,
                            firstName: obj.firstName,
                            lastName: obj.lastName,
                            phone: obj.phone,
                            password: encryptedPassword,
                            salt: salt,
                            confirmed: false,
                            loc: {},
                            t: 2
                        };
                        newOwner.loc.coordinates = [];
                        newOwner.loc.coordinates[0] = 43;
                        newOwner.loc.coordinates[1] = 43;
                        var dbUser = new mongoQuery.userSchemas.Users(newOwner);
                        //obj.guid = dbUser.guid;

                        dbUser.save(function (err) {
                            if (err) {
                                logger.log(" ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR ");
                                logger.log(err);
                            }
                            logger.log('Owner saved successfully!');

                            //email.emailCreateUser(dbUser);

                            //2.in case that has email,   add a new record into the notification table in order to be notified about the account
                            if (hasEmail == true) {
                                deferred.resolve(dbUser._id);
                            } else {
                                deferred.resolve(dbUser._id);
                            }

                        });


                    } else {
                        var existentUser = recordset[0];
                        deferred.resolve(existentUser._id.toString());
                    }
                });
            return deferred.promise;

        },
        getUserInfo: function (obj) {
            var deferred = q.defer();
            var query = mongoQuery.userSchemas.Users.find({
                _id: obj._id
            }, {
                confirmed: 1,
                lld: 1
            });

            mongoQuery.executeQuery(query)
                .then(function (recordset) {
                    if (recordset.length == 0) {
                        deferred.resolve(null);
                    } else {
                        var dbUser = recordset[0]._doc;
                        deferred.resolve(dbUser);
                    }
                });
            return deferred.promise;
        },
        createUserResponse: function (obj) {
            var tokenObj = {
                email: obj.email,
                id: obj._id
            };
            var token = jwt.sign(tokenObj, config.tokenPassword, {
                expiresIn: '245h'
            });
            var result = {
                id: obj._id,
                name: obj.name,
                email: obj.email,
                firstName: obj.firstName,
                lastName: obj.lastName,
                nick: obj.nick,
                address: obj.address,
                address_coord: obj.loc,
                avatar: obj.avatar,
                fbAvatar: obj.fbAvatar,
                genre: obj.genre,
                birth: obj.birth,
                phone: obj.phone,
                token: token,
                amount: obj.amount
            };
            if (obj.t) {
                result.t = obj.t;
            }
            return result;
        },


        loginfb_old: function (obj, res) {
            logger.log(obj);

            //logger.log(mongoQuery);
            var fbTokenUrl = "https://graph.facebook.com/me?fields=email&access_token=" + obj.token;
            models.download(fbTokenUrl).then(function (fbTokenResult) {
                // console.log("fbTokenResult");
                // console.log(fbTokenResult);

                logger.log("loginfb");
                if (fbTokenResult.error) {
                    var failFbLogin = {
                        invalid_token: true,
                        message: "invalid_fb_token"
                    };
                    return response.sendResponse(res, false, failFbLogin, "", "");
                }
                if (fbTokenResult.email != obj.email) {
                    // console.log("!++++++++++++++++");
                    // console.log(fbTokenResult.email);
                    // console.log(obj.email);
                    var failFbEmailLogin = {
                        invalid_token: true,
                        message: "invalid_fb_email"
                    };
                    return response.sendResponse(res, false, failFbEmailLogin, "", "");
                }

                obj.email = obj.email.toLowerCase();

                var query = mongoQuery.userSchemas.Users.find({
                    'email': obj.email.toLowerCase()
                });

                mongoQuery.executeQuery(query)
                    .then(function (recordset) {
                        if (recordset.length > 0) {
                            logger.log(recordset);
                            var user = models.createUserResponse(recordset[0]);
                            // console.log(user);
                            return response.sendResponse(res, true, user, "", "");

                        } else {
                            var salt = encryption.salt();
                            var randomPassword = "12345";
                            var encryptedPassword = encryption.encrypt(randomPassword, salt);

                            var dbUser = new mongoQuery.userSchemas.Users({
                                name: "",
                                email: obj.email,
                                password: encryptedPassword,
                                salt: salt,
                                //guid: encryption.guid(),
                                langId: obj.langId,
                                confirmed: false,
                                reset: encryption.guid(),
                                fbAvatar: obj.picture,
                                firstName: obj.first_name,
                                lastName: obj.last_name
                            });
                            //obj.guid = dbUser.guid;
                            if (!obj.loc) {
                                dbUser.loc.coordinates[0] = 0;
                                dbUser.loc.coordinates[1] = 0;
                            } else {
                                var longitude = obj.loc.center.lng;
                                if (!longitude) {
                                    longitude = obj.loc.center.lon;
                                }
                                if (!longitude) {
                                    longitude = "0";
                                }
                                dbUser.loc.coordinates[0] = parseFloat(longitude);
                                dbUser.loc.coordinates[1] = parseFloat(obj.loc.center.lat);
                            }
                            dbUser.amount.value = 10;

                            dbUser.save(function (err) {
                                if (err) {
                                    logger.error(err);
                                }
                                logger.log('User saved successfully!');
                                dbUser.password = randomPassword;
                                dbUser.langId = obj.langId;
                                email.emailfbUser(dbUser);

                                return models.login({
                                    Login: obj.email,
                                    Password: randomPassword
                                }, res);
                            });
                        }
                    });
            });


        }

    };
    return models;
}
