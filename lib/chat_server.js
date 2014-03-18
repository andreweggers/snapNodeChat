var socketio = require("socket.io"),
    _ = require("lodash"),
    fs = require("fs");

var createChat = function(server){
  return socketio.listen(server);
};

module.exports.createChat = createChat;
