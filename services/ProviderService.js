class ProviderService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getBySpecials(limit, skip, special) {
		try {
			let providers = [];

			let query = await this.db.Provider.findByTags(
				limit,
				skip,
				special,
			);
			let userIds = [];

			query.forEach((element) => {
				let { userId } = element;
				userIds.push(userId);
			});

			for (const id of userIds) {
				const info = await this.db.User.find({
					_id: id,
				});
				await providers.push(info);
			}

			if (providers.length == 0) throw new Error('Not found');

			return { success: true, data: { providers } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getProviderById(id) {
		try {
			const provider = await this.db.User.findOne({
				role: 'Provider',
				_id: id,
			});

			if (provider == null) throw new Error('Not found');

			return { success: true, data: { provider } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getAllProviders(limit, skip) {
		try {
			const providers = await this.db.User.find({
				role: 'Provider',
			})
				.limit(parseInt(limit))
				.skip(parseInt(skip));

			return { success: true, data: { providers } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async addCommandById(payload) {
		const { providerId, commandId } = payload;
		try {
			await this.db.Provider.updateOne(
				{
					userId: providerId,
				},
				{
					$push: {
						commandsQueue: commandId,
					},
				},
			);

			return {
				success: true,
				data: {},
			};
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async addReservationById(payload) {
		const { providerId, reservationId } = payload;
		try {
			await this.db.Provider.updateOne(
				{
					userId: providerId,
				},
				{
					$push: {
						reservationsQueue: reservationId,
					},
				},
			);

			return {
				success: true,
				data: {},
			};
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ProviderService;
