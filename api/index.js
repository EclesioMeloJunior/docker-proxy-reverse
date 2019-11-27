const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

dotenv.config();

app.use(morgan("combined"));

const port = process.env.PORT;
const exposed = process.env.EXPOSED;
const instanceName = process.env.INSTANCE_NAME;

app.get("/", (request, response) => {
  return response.json({ instanceName });
});

app.listen(port, () => {
  console.log(`APP STARTED AT ${exposed || port}`);
});
