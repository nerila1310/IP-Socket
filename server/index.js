var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/*===========================================
=            Creamos el servidor            =
===========================================*/
server.listen(6677, function(){
	console.log('Servidor funcionando en http://localhost:6677');
});
