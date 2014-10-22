var amqp = require('amqp'),
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path');

var connection = amqp.createConnection({ host: 'localhost' });

connection.on('ready', function () {

  console.log('connected to the RabbitMQ server on localhost');

  connection.queue('demo-queue', function(queue){
    queue.bind('#');

    queue.subscribe(function (message) {

      // need to decode from the raw buffer 
      var encoded_payload = decodeURI(message.data);

      console.log('sending', decodeURI(message.data));
      
      io.emit('demo', decodeURI(message.data));
    });
  });
});

app.use(express.static(path.resolve(__dirname, '../', 'client')));
app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on localhost:3000');
});