const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const listarTodosOsIncidentes = await connection("incidentes")
            .limit(5)
            .offset((page - 1) * 5)
            .select("*");
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

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const deletarIncidentePeloId = await connection("incidentes")
            .where("id", id)
            .select("ong_id")
            .first();

        if (deletarIncidentePeloId.ong_id != ong_id) {
            return response.sendStatus(401)
        }
        await connection("incidentes").where("id", id).delete();
        return response.status(200).send("Incidente deletado");
    },
};
