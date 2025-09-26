const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT;
const routes = require("./src/routes/routes");
const { createDBConnection } = require("./src/db/mongo");

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