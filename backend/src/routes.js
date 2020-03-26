const express = require("express");
const ongsController = require("./controllers/ongsController");
const incidentesController = require("./controllers/incidentesController");
const routes = express.Router();

//rotas ong
routes.get("/ongs", ongsController.index);
routes.post("/ongs", ongsController.create);

//rotas incidentes
routes.get("/incidentes", incidentesController.index);
routes.post("/incidentes", incidentesController.create);
routes.delete("/incidentes/:id", incidentesController.delete);

module.exports = routes;
