import { ApolloServer, gql } from 'apollo-server';
import config from './config';

import schema from './schema';
import resolvers from './resolvers';
import dataSources from './datasources';
import context from './context';

export const startApolloAPI = () => {
	console.log('>> STARTING GRAPH-QL APOLLO API !', config.environment);

	const server = new ApolloServer({
		// >> gql syntax for schema and typeDefs (Object definitions)
		typeDefs: schema,
		// >> Controllers to Handle dataSource requests and satisfying the requested schema
		resolvers,
		// >> Connections to handle api data dependencies
		dataSources,
		// >> Base handle that accepts all inbound requests for all resolvers
		context
	});

	server.listen(config.port).then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
};
