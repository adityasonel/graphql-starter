const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../productlines/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
