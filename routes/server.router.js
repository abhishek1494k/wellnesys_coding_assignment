const express = require("express");
const app = express();
const serverRouter = express.Router();

const { serverController } = require("../controller/server.controller");

// ----->>>>> Server Default Route <<<<<-----
serverRouter.get("/", serverController);

module.exports = { serverRouter };
