const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../employees/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
