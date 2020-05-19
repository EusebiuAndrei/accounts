const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
	courses: [
		{
			name: {
				type: String,
				required: true,
			},
			category: {
				type: [String],
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			image: {
				type: String,
			},
			ingredients: {
				type: [String],
			},
			allergenes: {
				type: [String],
			},
		},
	],
	providerId: {
		type: mongoose.Types.ObjectId,
		require: true,
	},
});

module.exports = menuSchema;
