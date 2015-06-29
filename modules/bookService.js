module.exports = function(server) {
	server.resources.register({
	    url: '/books',

	    model: {
	        title: String,
	        price: Number
	    }
	});
};