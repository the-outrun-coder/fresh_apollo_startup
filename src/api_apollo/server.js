import { ApolloServer, gql } from 'apollo-server';
import config from './config';

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
		typeDefs: [rootSchema], // << gql syntax for schema and typeDefs (Object definitions)
		resolvers: {
			// << Handlers for incoming requests
			Query: {
				myCat() {
					return { name: 'Garfield' };
				}
			}
		},
		// dataSources: () => {} // << Connect and handle api dependencies
		context() {
			// << Creates context handle across all resolvers
			return { user: null };
		}
	});

	server.listen(config.port).then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
};
