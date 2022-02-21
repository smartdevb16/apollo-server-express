const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const mongoose = require("mongoose");
const models = require("./models");

async function startServer() {
    const app = express();

    const apolloServer = new ApolloServer({ 
        typeDefs, 
        resolvers,
        context: () => {
            return { models };
        }
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    
    app.use((req, res) => {
        res.send("Hello from express apollo server");
    });

    try {
        await mongoose.connect("mongodb://localhost:27017/travelcms", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Mongoose connected...");
    } catch (error) {
        console.log(error);
    }

    app.listen(4000, () => console.log("Serverin running on port 4000"))
}

startServer();