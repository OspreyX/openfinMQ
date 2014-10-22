var amqp = require('amqp');

var connection = amqp.createConnection({ host: 'localhost' }),
		labels = ['2YR/5YR','2YR/10YR','2YR/20YR','2YR/30YR',
			'5YR/10YR', '5YR/20YR', '5YR/30YR',
			'10YR/20YR','10YR/30YR',
			'20YR/30YR'];

var generateDemoData = function(){
	var demoData = [];

	labels.forEach(function(label){
		demoData.push({
			spread: label,
			bps: Math.random() * 200,
			change: Math.random() * 10,
			dv01: Math.random() * 100,
			hedge: Math.random() * 10
		});
	});

	return demoData;
};

// Wait for connection to become established.
connection.on('ready', function () {

  console.log('connected to the RabbitMQ server on localhost');

  setInterval(function(){
		var demoData = generateDemoData();
		connection.publish('demo-queue', JSON.stringify({
			demo: demoData,
			on: Date()
		}));
  }, 3000);
});



