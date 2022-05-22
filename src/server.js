const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const server = express();

server.use(cors())
server.use(morgan("dev"));
server.use(express.json())

// routes(server);

module.exports = server;