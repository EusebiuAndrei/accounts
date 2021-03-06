const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
	// This error should crash whole process

	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
module.exports = {
	port: process.env.PORT || 4000,
	databaseURL: process.env.DB_CONNECTION,
	databaseTestURL: process.env.DB_CONNECTION_TEST,
	jwtSecret: process.env.JWT_SECRET,
	logs: {
		level: process.env.LOG_LEVEL || 'silly',
	},
	api: {
		prefix: '/api',
	},
};
