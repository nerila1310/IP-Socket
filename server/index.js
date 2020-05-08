var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo', function(req, res){
	res.status(200).send('hola mundo desde una ruta');
})

var messages = [{
	id: 1,
	text: 'Bienvenido al chat privado de Socket.io y NodeJS de Neri Laredo...',
	nickname: 'Bot - NeriLaredo'
}];

io.on('connection', function(socket){
	console.log('El nodo con IP: '+ socket.handshake.address +' se ha conectado...');
	socket.emit('messages', messages);
});

/*===========================================
=            Creamos el servidor            =
===========================================*/
server.listen(6677, function(){
	console.log('Servidor funcionando en http://localhost:6677');
});
