var fs = require('fs'),
	odata = require('node-odata'),
	config = require('./config/environments'),
	server,
	path;

// start and setup the server object
server = odata(config.db);
server.config.set('prefix', config.prefix);

// Load from modules folder
path = __dirname + '/modules';
fs.readdirSync(path).forEach(function (file) {
	var module = path + '/' + file;

	console.log('Registering ' + module);
  	if (~file.indexOf('.js')) require(module)(server);
});
 
// start listening
console.log('Start listening on ' + config.port);
server.listen(config.port);