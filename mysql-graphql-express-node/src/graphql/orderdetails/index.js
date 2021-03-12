const importTypeDefs = require("../utils/importTypeDefs");
const resolvers = require("./resolvers");
const typeDefs = importTypeDefs("../orderdetails/typeDefs.graphql");

module.exports = {
    typeDefs,
    resolvers,
};
