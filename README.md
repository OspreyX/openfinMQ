# Demo RabbitMQ / Node / Socket IO / OpenFin / Angular 

A basic process set that integrates data flowing through a rabbitMQ server combined with a NodeJS server that subsequently makes the data available via websockets (socket I/O) 

## Getting started 

(`$ ...` indicates entries to the command line)

* [download and install RabbitMQ](http://www.rabbitmq.com/download.html)
* clone this repo `$ git clone https://github.com/datamadic/openfinMQ.git`
* install dependencies `$ npm install`
* install bower dependencies:
	* cd into the client directory `$ cd client`
	* `bower install`
* start server `$ rabbitmq-server`
* start publisher (from root directory) `$ node server/publisher.js`
* start index (from root directory) `$ node server/server.js`

## Hooking up to OpenFin

To run the web client as an OpenFin application

*	Create an OpenFin app via our [generator](https://github.com/openfin/generator-openfin)
* In the OpenFin project's directory, edit the file `publicapp.json` so the `url` key points to the node server
````js
{
    "env": "2.0.7.0",
    ...
    "startup_app": {
    		...
        "url": <Your Path Goes Here>,
				...
    },
    "runtime": {
        ...
    },
    "shortcut": {
        ...
    }
}

````

## Hooking up your own data

If you have your own data source you can hook it up to the Angular app. You would have to connect to your WebSocket and swap out the call to `socket.on(...)` in `client/scripts/controllers/main.js` to one that handles the socket you connected to. 

The structure of the json the app expects is an array of objects structured as follows: 

	[{
		spread: "5YR/10YR",
		bps: 120,
		change: 2,
		dv01: 12,
		hedge: 3

	},
	{
		...
	}]

## Questions?
shoot an email to support@openfin.co

