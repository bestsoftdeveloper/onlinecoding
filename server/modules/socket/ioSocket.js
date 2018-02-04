// https://socket.io/docs/server-api/

module.exports = function() {
  var ioSocketServer = null;

  var socketMethods = {
    // users:[],
    init:function () {
      //var users = [];

      var connectedUsers = {

      };

      ioSocketServer.use((socket, next) => {
        if (socket.request.headers.cookie) return next();
        next(new Error('Authentication error'));
      });

      ioSocketServer.on('connection', function(socket){
        console.log("new connection");
        //users.push(socket);

        debugger;

        connectedUsers[socket.id] = socket;

        socket.emit('welcome', { hello: 'new user', socket_id: socket.id, usersCount : 1 });

        socket.on('clientRequest', function (data) {
          console.log("primim comenzi din browser");
          console.log(data);
          socket.emit('response', { clientRequestFromServer: data });
          connectedUsers[data.toUserId].emit({msg:"hello"});
          //users.find(useid);

        });

        socket.on('disconnect', function () {
          console.log("disconnect");
          console.log(socket);

          console.log(connectedUsers);

          delete connectedUsers[socket.id];

          console.log(connectedUsers);

          // users.splice(
          //   users.findIndex(
          //     (i) => i.id === data.id
          // ), 1 );

          for(var connId in connectedUsers)
          {
            var sock = connectedUsers[connId];
            sock.emit('userDisconnected', {user:data, usersCount : users.length });
          }
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
