// Create functions that will represent schema statics
const findByTags = async function (limit, skip, tags) {
	let filter = {};
	if (tags.length) {
		filter = { specials: { $all: tags } };
	}
	const query = this.find(filter)
		.select('userId -_id')
		.limit(parseInt(limit))
		.skip(parseInt(skip));

	//console.log(query.getOptions());

	return query.exec();
};

module.exports = {
	// Put them all here
	findByTags,
};
