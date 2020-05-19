const Logger = require('../loaders/logger');
const mongoose = require('mongoose');

class MenuService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async create(payload, providerId) {
		const menuData = { ...payload, providerId };
		const condition = { providerId };
		const options = {
			upsert: true,
			new: true,
			useFindAndModify: false,
		};

		try {
			const menu = await this.db.Menu.findOneAndUpdate(
				condition,
				menuData,
				options,
			);
			return { success: true, data: menu };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = MenuService;
