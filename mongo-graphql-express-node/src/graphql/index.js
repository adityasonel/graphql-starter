const { makeExecutableSchema } = require("@graphql-tools/schema")
const { merge } = require("lodash")

const Query = `
  	type Query {
    	_empty: String
  	}
`

const resolvers = {}

module.exports = makeExecutableSchema({
	typeDefs: [Query],
	resolvers: merge(resolvers),
})
