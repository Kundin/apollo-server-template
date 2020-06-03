const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 4000;

// Подключение к MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
