const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: isDev,
  debug: isDev,
  introspection: isDev,
  playground: isDev,
});

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
