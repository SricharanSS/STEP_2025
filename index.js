import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import routes from "./src/routes/routes.js";
import { createDBConnection } from "./src/db/mongo.js";

const app = express();

// For parsing application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT,  async () => {
    await createDBConnection();
    console.log("Server Listening at PORT:"+PORT);
});