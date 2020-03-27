const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        //exibe numero total de ongs 
        const [count] = await connection("ongs").count();
        console.log(count);

        //lista todas as ongs, delimitando 5 por pagina
        const listarTodasAsOngs = await connection("ongs")

            .limit(5)
            .offset((page - 1) * 5)
            .select("*");

        //exibe o total de incidentes no header
        response.header("X-Total-Count", count["count(*)"]);
        return response.json(listarTodasAsOngs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString("HEX");
        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({ id });
    },
};
