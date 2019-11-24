import { ApolloServer, gql } from 'apollo-server';
import config from './config';

import resolvers from './resolvers';
import dataSources from './datasources';
import context from './context';

export const startApolloAPI = () => {
	console.log('>> STARTING GRAPH-QL APOLLO API !', config.environment);

	const rootSchema = gql`
		type Cat {
			name: String
			furColor: String
		}

		type Query {
			myCat: Cat
		}

		schema {
			query: Query
		}
	`;

	const server = new ApolloServer({
		// >> gql syntax for schema and typeDefs (Object definitions)
		typeDefs: [rootSchema],
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
