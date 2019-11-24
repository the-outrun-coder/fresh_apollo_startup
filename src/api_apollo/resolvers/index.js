import rootResolver from './root';

// Other resource specific resolvers can be imported and connected here
import userResolvers from './user';
import exampleResourceSubsetResolvers from './example.resource';

export default {
	Query: {
		...rootResolver.Query,
		...userResolvers.Query,
		...exampleResourceSubsetResolvers.Query
	}
	// Mutatation, etc...
};
