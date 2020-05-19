const { Router } = require('express');
const { providerService } = require('../../services/index');
const Logger = require('../../loaders/logger');
const setResponseStatus = require('../../utils/utils');

const router = Router();

router.get('/', async (req, res) => {
	const { limit, skip } = req.query;
	const result = await providerService.getAllProviders(limit, skip);

	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

router.get('/specials', async (req, res) => {
	const { limit, skip } = req.query;
	let tags = req.query.special;
	if (!tags) {
		tags = [];
	} else if (!Array.isArray(tags)) {
		tags = [tags];
	}
	const result = await providerService.getBySpecials(
		limit,
		skip,
		tags,
	);

	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	const result = await providerService.getProviderById(userId);

	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

module.exports = router;
