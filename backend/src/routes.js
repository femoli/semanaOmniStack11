const express = require("express");
const ongsController = require("./controllers/ongsController");
const routes = express.Router();

routes.get("/ongs", ongsController.index);
routes.post("/ongs",ongsController.create);

module.exports = routes;
