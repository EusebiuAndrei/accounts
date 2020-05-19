const multer = require('multer');

const fileFilter = (req, file, cb) => {
	//reject a file
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/jpg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	limits: {
		fileSize: 4 * 1024 * 1024,
	},
	fileFilter: fileFilter,
});

module.exports = upload;
