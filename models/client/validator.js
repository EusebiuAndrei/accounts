const { Joi } = require('celebrate');
// const joiObjectId = require('joi-objectid');

// // add joi-objectId to Joi
// Joi.objectId = joiObjectId(Joi);

const schema = (isFirstChange) => {
	if (isFirstChange) {
		return Joi.object().keys({
			preferences: Joi.array()
				.items(Joi.string().required())
				.required(),
			allergies: Joi.array()
				.items(Joi.string().required())
				.required(),
			location: Joi.object()
				.keys({
					latitude: Joi.number()
						.min(-90)
						.max(90)
						.required(),
					longitude: Joi.number()
						.min(-180)
						.max(180)
						.required(),
				})
				.required(),
			avatar: Joi.required(),
		});
	}
	if (!isFirstChange) {
		return Joi.object().keys({
			preferences: Joi.array().items(Joi.string()),
			allergies: Joi.array().items(Joi.string()),
			location: Joi.object().keys({
				latitude: Joi.number().min(-90).max(90),
				longitude: Joi.number().min(-180).max(180),
			}),
			avatar: Joi.string(), // trebuie modificat
		});
	}
};

module.exports = schema;
