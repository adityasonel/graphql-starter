const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const rootSchema = require("./src/graphql/index");

class App {
    constructor() {
        this.apolloServer = new ApolloServer({
            schema: rootSchema,
        });

        this.expressApp = express();
        this.configs = {
            get port() {
                return 3030;
            },
        };
    }

    applyMiddleware() {
        this.expressApp.use(
            express.urlencoded({
                extended: true,
            })
        );
        this.expressApp.get("/", (req, res) => res.send("yippe, server is up & running 🚀").status(200));
        this.expressApp.use(express.json());
        this.apolloServer.applyMiddleware({ app: this.expressApp });
    }

    run() {
        this.expressApp.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + this.apolloServer.graphqlPath);
        });
    }
}

const app = new App();
app.applyMiddleware();
app.run();
