const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../customers/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
