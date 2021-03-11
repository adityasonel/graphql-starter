const { GraphQLScalarType, Kind } = require("graphql");

const Date = new GraphQLScalarType({
    name: "Date",
    // value from the client
    serialize: (value) => value.getTime(),
    // value sent to the client
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => (ast.kind === Kind.INT ? new Date(parseInt(ast.value, 10)) : null),
});

module.exports = {
    Date,
};
