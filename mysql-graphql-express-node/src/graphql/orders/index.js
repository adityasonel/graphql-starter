const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../orders/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
