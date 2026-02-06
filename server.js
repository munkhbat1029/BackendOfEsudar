const typeDefs = `
  type Query {
    hello: String
    ognoo: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    ognoo: () => new Date().toLocaleString(),
  },
};