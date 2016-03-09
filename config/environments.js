module.exports = {
	development: {
		db: 'mongodb://aisoft@super123@dogen.mongohq.com:10032/odata-test',
		prefix: '/api/v1',
		port: 3000
	},
	test: {
		
	},
	production: {
		
	}
}[process.env.NODE_ENV || 'development'];