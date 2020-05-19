const { Joi } = require('celebrate');
// const joiObjectId = require('joi-objectid');

// // add joi-objectId to Joi
// Joi.objectId = joiObjectId(Joi);

const schema = function (firstChange) {
	if (firstChange)
		return Joi.object().keys({
			location: Joi.object().keys({
				latitude: Joi.number().min(-90).max(90).required(),
				longitude: Joi.number().min(-180).max(180).required(),
				address: Joi.string().required(),
			}),
			CUI: Joi.string().required(),
			type: Joi.required().error(new Error('Type required')),
			description: Joi.string().required(),
			rating: Joi.required(),
			priceCategory: Joi.valid(
				'Affordable',
				'Medium',
				'Expensive',
			).required(),
			specials: Joi.array()
				.items(Joi.string().required())
				.required(),
			tables: Joi.number().required(),
		});
	return Joi.object().keys({
		location: Joi.object()
			.keys({
				latitude: Joi.number().min(-90).max(90),
				longitude: Joi.number().min(-180).max(180),
				address: Joi.string(),
			})
			.error(new Error('Invalid locations required')),
		CUI: Joi.string().error(new Error('Invalid CUI')),
		type: Joi.required().error(new Error('Invalid Type')),
		description: Joi.string(),
		priceCategory: Joi.valid('Affordable', 'Medium', 'Expensive'),
		specials: Joi.array()
			.items(Joi.string())
			.error(new Error('Invalid specials')),
		tables: Joi.number(),
	});
};

module.exports = schema;
