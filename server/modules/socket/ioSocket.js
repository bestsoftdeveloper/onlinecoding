// https://socket.io/docs/server-api/
module.exports = function() {
  var ioSocketServer = null;

  var socketMethods = {
    init:function () {

      ioSocketServer.use((socket, next) => {
        if (socket.request.headers.cookie) return next();
        next(new Error('Authentication error'));
      });

      ioSocketServer.on('connection', function(socket){
        console.log("new connection");

        socket.emit('news', { hello: 'world' });

        socket.on('my other event', function (data) {
          console.log(data);
        });



      });




    }
  };
  var socketBoot = {
    connect:function(server)
    {
      ioSocketServer = require('socket.io').listen(server);
      ioSocketServer.set("log level", 0);
      socketMethods.init();
    }
  }

  return socketBoot;
}
