const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../offices/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
