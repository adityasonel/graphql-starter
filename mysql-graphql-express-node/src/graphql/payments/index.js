const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../payments/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
