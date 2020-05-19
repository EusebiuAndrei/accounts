/* eslint-disable no-return-assign */
const { celebrate } = require('celebrate');
const {
	clientValidationSchema,
	providerValidationSchema,
} = require('../../models/index');

const dynamicCelebrate = (req, res, next) => {
	const { user } = req.data;
	const userData = user[0];
	req.content = req.body;
	if (userData.role === 'Client') {
		return celebrate({
			body: (validator = () => {
				const isFirstVisitClient = !(userData.__v > 1);

				return clientValidationSchema(isFirstVisitClient);
			}),
		}).call(this, req, res, next);
	}

	return celebrate({
		body: (validator = () => {
			const isFirstVisitProvider = !(userData.__v > 1);
			return providerValidationSchema(isFirstVisitProvider);
		}),
	}).call(this, req, res, next);
};

module.exports = dynamicCelebrate;
