var socketio = require("socket.io"),
    _ = require("lodash"),
    fs = require("fs"),
    messages = [];

var createChat = function(server){
  var chatServer =  socketio.listen(server);
  
  chatServer.sockets.on("connection", function(socket) {
    socket.on('message', function(data)){
      message.push(data.text);
    };

    

  });
};

module.exports.createChat = createChat;
