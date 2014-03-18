(function(root){

  var Chat = root.Chat = root.Chat || function(socket) {
    this.socket = socket;
  }

  Chat.prototype.sendMessage = function(data) {
    this.socket().emit('message', { text: data.text, handle: data.handle });
  }
})(this);