const { Router } = require('express');
const { clientService } = require('../../services/index.js');
const setResponseStatus = require('../../utils/utils');

const router = Router();

router.get('/', async (req, res) => {
	const result = await clientService.getClients(req.query);
	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;
	const result = await clientService.getClientbyId(userId);
	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

router.post('/addCommand', async (req, res) => {
	const result = await clientService.addCommandById(req.body);

	res.status(setResponseStatus(201, 400, result.success)).json(
		result,
	);
});

router.post('/addReservation', async (req, res) => {
	const result = await clientService.addReservationById(req.body);

	res.status(setResponseStatus(201, 400, result.success)).json(
		result,
	);
});

module.exports = router;
