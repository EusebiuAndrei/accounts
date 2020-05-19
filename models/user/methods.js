const jwt = require('jsonwebtoken');
const config = require('../../config/index');
const bcrypt = require('bcryptjs');
const Crypto = require('crypto');

// Create functions that will represent schema methods
const generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign(
		{ _id: user._id.toString() },
		config.jwtSecret,
	);

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

const generateEmailToken = async function () {
	const user = this;
	const token = jwt.sign(
		{ _id: user._id.toString() },
		config.jwtSecret,
	);

	user.emailToken = token;
	await user.save();

	return token;
};

const generateNewPassword = async function () {
	const user = this;
	const password = Crypto.randomBytes(6)
		.toString('base64')
		.slice(0, 6);

	user.password = password;
	await user.save();

	return password;
};

const changePassword = async function (
	currentPass,
	newPass,
	confirmNewPass,
) {
	const user = this;

	const isMatch = await bcrypt.compare(currentPass, user.password);
	console.log(currentPass + ' ' + user.password);
	if (!isMatch) {
		throw new Error('Parola curenta incorecta!');
	}

	if (newPass != confirmNewPass) {
		throw new Error('Cele doua parole nu coincid!');
	}

	user.password = newPass;
	await user.save();

	return newPass;
};

const toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.tokens;

	return userObject;
};

module.exports = {
	// Put them all here
	generateAuthToken,
	generateEmailToken,
	toJSON,
	generateNewPassword,
	changePassword,
};
