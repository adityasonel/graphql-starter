const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../products/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
