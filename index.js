import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connect } from "mongoose";
// import typeDefs from "./schema.js";
// import resolvers from "./resolvers.js";

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Server is running",
  },
};
async function startServer() {
  await connect("mongodb+srv://Shabharishwaran:Iamgroot%401998@cluster0.6amwzdn.mongodb.net/twitter_clone");
  console.log("Connected to MongoDB");

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at ${url}`);
}

startServer();