const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const listarTodosOsIncidentes = await connection ("incidentes").select("*");
        return response.json(listarTodosOsIncidentes);
    },
    
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        
        const [id] = await connection("incidentes").insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },
};
