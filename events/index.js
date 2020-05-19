const EventEmitter = require('events');
const events = require('./events');

const Emitter = new EventEmitter();

// Import all the users models

// import all subscribers
const UserSubscriber = require('./UserSubscriber');

// create subcriber objects
const userSubscriber = new UserSubscriber({
	db: {},
	services: {},
});

Emitter.on(events.user.signUp, userSubscriber.onUserSignUp);
Emitter.on(events.user.signIn, userSubscriber.onUserSignIn);

module.exports = Emitter;
