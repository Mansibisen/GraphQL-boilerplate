const { GraphQLServer } = require("graphql-yoga");
const { models, StartDB } = require("./src/database/index.js");
const resolvers = require("./src/graphql/resolvers");
const db = StartDB({
    db: "myfirstgraphql",
    url: "localhost:27017",
});
// place where all models and connection to db go
const context = {
    db,
    models,
};

const Server = new GraphQLServer({
    typeDefs: `${__dirname}/src/graphql/schema.graphql`,
    resolvers,
    context,
});
const opt = { port: 4000 };
Server.start((port) => {
    console.log(`server started at port http://localhost:${opt.port}`);
});
