const { join } = require("path");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { loadTypedefsSync } = require("@graphql-tools/load");

module.exports = (dir) => {
    return loadTypedefsSync(join(__dirname, dir), {
        loaders: [new GraphQLFileLoader()],
    }).map((source) => source.rawSDL)[0];
};
