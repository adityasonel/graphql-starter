const { makeExecutableSchema } = require("@graphql-tools/schema");
const { merge } = require("lodash");

const { Date } = require("./scalarTypeDefs");

const Query = `
	scalar Date
  	type Query {
    	_empty: String
  	}
`;

const resolvers = {
    Date,
};

module.exports = makeExecutableSchema({
    typeDefs: [Query],
    resolvers: merge(resolvers),
});
