var socketio = require("socket.io"),
    _ = require("lodash"),
    fs = require("fs"),
    messages = []; // might want to use this later for full message tracking

var createChat = function(server){
  var chatServer =  socketio.listen(server);
  
  chatServer.sockets.on("connection", function(socket) {
    socket.on('message', function(data){
      chatServer.sockets.emit('updateMessages', data);
    });
  });
};

module.exports.createChat = createChat;
