// graphql-tools combines a schema string with resolvers.
const {makeExecutableSchema} = require('graphql-tools');

// Construct a schema, using GraphQL schema language
const typeDefs = `
	type Person {
	  age: Float
	  name: String
	}

  type Query {
    person: Person
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    person: () => ({
      age: 0.5,
      name: 'A proof of concept'
    })
  }
};

exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

