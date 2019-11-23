import { ApolloServer, gql } from 'apollo-server';

export const startApolloAPI = () => {
	console.log('>> STARTING GRAPH-QL APOLLO API !');

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
		context({ req }) {
			const headers = req.headers;
			console.log(
				'\n\n>> Access the request data from the context handle for all end point calls.',
				req.body,
				'\n - LOGIN TOKEN:',
				headers.logintoken,
				'\n - USER ID:',
				headers.userid,
				'\n - DB AUTH TOKEN:',
				headers.authtoken,
				''
			);

			// << Creates context handle across all resolvers
			return { user: null };
		}
	});

	server.listen().then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
};
