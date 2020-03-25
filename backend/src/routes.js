const express = require("express");
const routes = express.Router();

routes.get("/", (request, response) => {
    
    return response.json({
        evento: 'Semana OmniStack 11',
        projeto: 'Aplicação Be The Hero'
    });
});
module.exports = routes;
