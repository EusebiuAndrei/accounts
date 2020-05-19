module.exports = (schema) => {
	// Add virtual fields to schema
	schema.virtual('menu', {
		ref: 'Menu',
		localField: '_id',
		foreignField: 'providerId',
		justOne: true,
		autopopulate: true,
	});
	schema.virtual('schedule', {
		ref: 'Schedule',
		localField: '_id',
		foreignField: 'providerId',
		justOne: true,
		autopopulate: true,
	});
};
