const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const verificarOngPeloId = await connection("ongs")
        .where("id", id)
        .select("name")
        .first();

        if (!verificarOngPeloId){
            return response.sendStatus(400);
        }
        return response.json(verificarOngPeloId);
    },
};