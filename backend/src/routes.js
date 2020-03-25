const express = require("express");
const routes = express.Router();

routes.get("/", (request, response) => {
    
    return response.json({
        evento: 'Semana OmniStack 11',
        aluna: 'Fernanda'
    });
});

routes.post("/users", (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11',
        aluna: 'Fernanda'
    });
});

module.exports = routes;
