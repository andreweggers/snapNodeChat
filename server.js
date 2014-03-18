var nodeStatic = require('node-static'),
    http = require('http'),
    file = new nodeStatic.Server('./public'),
    fs = require('fs'),
    path = require('path');


var staticServer = http.createServer(function(request, response) {
  request.addListener('end', function() {
    console.log("received req. from ", request.url);
    file.serve(request, response);
  }).resume();
}).listen(8080); 


// var socketIOListener = require("./lib/socket_server.js").socketIOListener

// socketIOListener(stacticServer);