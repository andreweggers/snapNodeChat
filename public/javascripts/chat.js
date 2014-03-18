(function(root){
  var Chat = root.Chat = root.Chat || function(socket) {
    this.socket = socket;
  }

  Chat.prototype.sendMessage = function(msg) {
    this.socket.emit('message', msg);
  }
})(this);