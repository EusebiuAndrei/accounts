// Import all the users models
const {
	User,
	Client,
	Provider,
	Menu,
	Schedule,
} = require('../models/index');

// Import all the service constructors
const SendEmailService = require('./SendEmailService');
const UserService = require('./UserService');
const MenuService = require('./MenuService');
const ScheduleService = require('./ScheduleService');
const ImageService = require('./ImageService');
const ClientService = require('./ClientServices');
const ProviderService = require('./ProviderService');
const CourseService = require('./CourseService');
// Create the service objects with dependencies
const menuService = new MenuService({
	db: {
		Menu,
		Provider,
	},
	services: {},
});

const scheduleService = new ScheduleService({
	db: {
		Schedule,
	},
	services: {},
});
const sendEmailService = new SendEmailService();

const userService = new UserService({
	db: {
		User,
		Client,
		Provider,
		Menu,
		Schedule,
	},
	services: { menuService, scheduleService, sendEmailService },
});

const imageService = new ImageService({
	db: {
		User,
		Client,
		Provider,
		Menu,
	},
	services: {},
});

const providerService = new ProviderService({
	db: {
		User,
		Provider,
	},
	services: {},
});

const clientService = new ClientService({
	db: {
		User,
		Client,
	},
	services: { providerService },
});

const courseService = new CourseService({
	db: {
		Menu,
		Provider,
	},
	services: {},
});

// Export the service object
module.exports = {
	userService,
	menuService,
	scheduleService,
	imageService,
	clientService,
	providerService,
	courseService,
};
