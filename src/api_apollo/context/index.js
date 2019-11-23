let contextHandler = async ({ req }) => {
	// CREATE CONTEXT HANDLER FOR ACROSS ALL RESOLVERS
	// console.log('\n\n>> CONTEXT HAS REQUEST HEADERS:', req.headers);

	return {
		headers: req.headers
	};
};

export default contextHandler;
