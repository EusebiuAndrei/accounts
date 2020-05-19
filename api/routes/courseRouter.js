const { Router } = require('express');
const { courseService } = require('../../services/index');
const setResponseStatus = require('../../utils/utils');

const router = Router();

router.get('/', async (req, res) => {
	const result = await courseService.getCourses(req.query);
	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

router.get('/:idCourse', async (req, res) => {
	const { idCourse } = req.params;
	const result = await courseService.getCourse({
		idCourse,
	});
	res.status(setResponseStatus(200, 400, result.success)).json(
		result,
	);
});

router.post('/:idMenu', async (req, res) => {
	const { idMenu } = req.params;
	const result = await courseService.addCourse(idMenu);
	res.status(setResponseStatus(201, 400, result.success)).json(
		result,
	);
});

router.patch('/:idCourse', async (req, res) => {
	const { idCourse } = req.params;
	const result = await courseService.updateCourse(
		idCourse,
		req.body,
	);
	res.status(setResponseStatus(204, 400, result.success)).json(
		result,
	);
});

router.delete('/:idCourse', async (req, res) => {
	const { idCourse } = req.params;
	const result = await courseService.deleteCourse(idCourse);
	res.status(setResponseStatus(204, 400, result.success)).json(
		result,
	);
});
module.exports = router;
