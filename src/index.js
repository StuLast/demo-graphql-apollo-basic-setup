import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    priceOfAnIdea: Float
    boJoSucks: Boolean!
    id: ID!
    fruits: [String!]
  }
`;

const resolvers = {
  Query: {
    id() {
      return 'ui234kdji9-234';
    },
    hello() {
      return 'Hello!';
    },
    numberOfAnimals() {
      return 44;
    },
    priceOfAnIdea() {
      return 33.2;
    },
    boJoSucks() {
      return true;
    },
    fruits() {
      return ['apple', 'orange', 'banana', 'mango'];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
