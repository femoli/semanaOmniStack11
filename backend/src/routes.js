const express = require("express");
const ongsController = require("./controllers/ongsController");
const incidentesController = require("./controllers/incidentesController");
const perfilOngController = require("./controllers/perfilOngController");
const loginOngController = require("./controllers/loginOngController");
const routes = express.Router();

//rotas ong
routes.get("/ongs", ongsController.index);
routes.post("/ongs", ongsController.create);

//rotas incidentes
routes.get("/incidentes", incidentesController.index);
routes.post("/incidentes", incidentesController.create);
routes.delete("/incidentes/:id", incidentesController.delete);

//rotas perfil-ong
routes.get("/perfil", perfilOngController.index);

//rotas login-ong
routes.post("/login", loginOngController.create);

module.exports = routes;
