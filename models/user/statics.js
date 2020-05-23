const bcrypt = require('bcryptjs');
const Logger = require('../../loaders/logger');

// Create functions that will represent schema statics
const findByCredentials = async function (email, password) {
	const user = await this.findOne({ email });

	if (!user) {
		throw new Error('Unable to login');
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error('Unable to login');
	}

	// if(user.emailToken != 0){
	// 	throw new Error('Account is not confirmed!');
	// }

	return user;
};

const findByEmailToken = async function (emailToken) {
	const user = await this.findOne({ emailToken });

	if (!user) {
		throw new Error('Invalid email confirm session!');
	}

	user.emailToken = '0';
	await user.save();
};

const findByEmail = async function (email) {
	const user = await this.findOne({ email });
	if (!user) {
		throw new Error('Invalid email!');
	}

	return user;
};

const findByToken = async function (tokens) {
	const user = await this.findOne({ tokens });

	if (!user) {
		throw new Error('Nu esti logat!');
	}

	return user;
};

module.exports = {
	// Put them all here
	findByCredentials,
	findByEmailToken,
	findByEmail,
	findByToken,
};
