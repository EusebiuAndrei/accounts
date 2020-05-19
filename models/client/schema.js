const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	preferences: [String],
	allergies: {
		type: [String],
		required: false,
	},
	location: {
		latitude: {
			type: Number,
		},
		longitude: {
			type: Number,
		},
	},
	avatar: {
		type: String,
		required: false,
	},
	commandsHistory: [String],
	reservationsHistory: [String],
	userId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
});

module.exports = clientSchema;
