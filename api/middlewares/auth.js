const { userService } = require('../../services/index');

const authorize = async function (req, res, next) {
	const token = req.header('Authorization')
		? req.header('Authorization').replace('Bearer ', '')
		: '';
	const result = await userService.authorize(token);

	if (result.success) {
		req.data = result.data;
		next();
	} else {
		res.status(401).json(result);
	}
};

module.exports = authorize;
