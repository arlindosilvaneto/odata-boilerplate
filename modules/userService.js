module.exports = function(server) {
	server.resources.register({
	    url: '/users',
	    model: {
	        email: String,
	        password: String,
	        token: String
	    }
	});
};