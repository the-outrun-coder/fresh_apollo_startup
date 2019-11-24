import RootSchema from './root.graphql';

import UserSchema from './user.graphql';
import exampleResourceSubsetSchema from './exampleRes.graphql';

export default [
	RootSchema,
	UserSchema,
	exampleResourceSubsetSchema
	// EXTEND SCHEMA WITH NEW IMPORTS AND REFS HERE
];
