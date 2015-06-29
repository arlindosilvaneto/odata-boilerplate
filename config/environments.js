module.exports = {
	development: {
		db: '',
		prefix: '/api/v1',
		port: 3000
	},
	test: {

	},
	production: {
		
	}
}[process.env.NODE_ENV || 'development'];