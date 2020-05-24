const { Router } = require('express');
const { upload } = require('../middlewares/index');
const { imageService } = require('../../services/index');
const { auth } = require('../middlewares/index');
const setResponseStatus = require('../../utils/utils');
const router = Router();

router.post(
	'/uploadSingle/:userId',
	auth,
	upload.single('myImage'),
	async (req, res) => {
		const { userId } = req.params;
		const result = await imageService.uploadOneImage(
			req.file.buffer,
			req.headers.host,
			userId,
		);
		console.log(result);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

router.post(
	'/uploadMultiple/:userId',
	auth,
	upload.array('myImage', 5),
	async (req, res) => {
		const { userId } = req.params;
		console.log(userId);
		const result = await imageService.uploadMultipleImages(
			req.files,
			req.headers.host,
			userId,
		);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

router.post(
	'/uploadMenuPhoto/:idCourse',
	auth,
	upload.single('myImage'),
	async (req, res) => {
		//console.log(req.params);
		let { idCourse } = req.params;
		//console.log(idCourse);
		const result = await imageService.uploadMenuPhoto(
			req.file.buffer,
			req.headers.host,
			idCourse,
		);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

router.post(
	'/deletePhotoProvider/:userId',
	auth,
	async (req, res) => {
		//console.log(req.params);
		let { userId } = req.params;
		const result = await imageService.deleteProviderImage(userId);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);

router.post('/deletePhotoClient/:userId', auth, async (req, res) => {
	//console.log(req.params);
	let { userId } = req.params;
	const result = await imageService.deleteClientImage(userId);
	res.status(setResponseStatus(201, 400, result.success)).json(
		result,
	);
});

router.post(
	'/deletePhotoProvider/:idCourse',
	auth,
	async (req, res) => {
		//console.log(req.params);
		let { idCourse } = req.params;
		const result = await imageService.deleteCourseImage(userId);
		res.status(setResponseStatus(201, 400, result.success)).json(
			result,
		);
	},
);
module.exports = router;
