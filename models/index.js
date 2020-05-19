const User = require('./user/index');
const userValidationSchema = require('./user/validator');
const Client = require('./client/index');
const clientValidationSchema = require('./client/validator');
const Provider = require('./provider/index');
const providerValidationSchema = require('./provider/validator');
const Schedule = require('./schedule/index');
const scheduleValidationSchema = require('./schedule/validator');
const Menu = require('./menu/index');
const menuValidationSchema = require('./menu/validator');

module.exports = {
	User,
	Client,
	Provider,
	Schedule,
	Menu,
	providerValidationSchema,
	userValidationSchema,
	clientValidationSchema,
	scheduleValidationSchema,
	menuValidationSchema,
};
