import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connect } from "mongoose";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

async function startServer() {
  await connect("mongodb://localhost:27017/twitter_clone");
  console.log("Connected to MongoDB");

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at ${url}`);
}

startServer();
