const logIn = (_, args, ctx) => {
	// console.log('>> LOGIN RESOLVER USES ARGS:', args);
	return ctx.dataSources.UserAPI.userLogIn(args.input);
};

const logOut = (_, args, ctx) => {
	console.log('\n>> LOGGING OUT');
	if (requiredFieldsOn(ctx.headers)) {
		return ctx.dataSources.UserAPI.userLogOut();
	} else {
		throw new Error('(!) LOGOUT REQUEST INVALID');
	}
};

export default {
	Query: {
		logIn,
		logOut
	}
};
