const Logger = require('../loaders/logger');

class ScheduleService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async create(payload, providerId) {
		const scheduleData = { ...payload, providerId };
		const condition = { providerId };
		const options = {
			upsert: true,
			new: true,
			useFindAndModify: false,
		};
		const schedule = await this.db.Schedule.findOneAndUpdate(
			condition,
			scheduleData,
			options,
		);
		try {
			return { success: true, data: { schedule } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ScheduleService;
