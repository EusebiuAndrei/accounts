const express = require('express');

const config = require('./config');
const loaders = require('./loaders/index');

const Logger = require('./loaders/logger');

express.static('public');
async function startServer() {
	const app = express();
	await loaders({ expressApp: app });

	app.listen(config.port, (err) => {
		if (err) {
			Logger.error(err);
			process.exit(1);
			return;
		}
		Logger.info(
			`🛡️  Server listening on port: ${config.port} 🛡️`,
		);
	});
}

startServer();
