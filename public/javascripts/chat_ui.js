$(function(){
  var socket = io.connect,
      $messages = $('.messages');

  currentChat = new Chat(socket);

  $('form').submit(function(e){
    e.preventDefault();

    currentChat.sendMessage({
      "handle": $('.handle').val() || "L33T User",
      "text": $('.message-input').val()
    });

    $('.message-input').val('').focus()
  });

  currentChat.socket().on('updateMessages', function(data) {  
    
    if ( $(".messages > div").length > 3 ) {
      $messages.find('div').first().remove();
    }

    var $newMessage = $('<div class="msg alert alert-danger">');
    
    $newMessage.append('<span class="username">');
    $newMessage.find('.username').text(data.handle);
    $newMessage.append(data.text);

    $messages.append($newMessage);
  });
})