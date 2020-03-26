
exports.up = function (knex) {
    return knex.schema.createTable("incidentes", function (table) {
        table.increments();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.decimal("value").notNullable();
        //relacionar com a ong
        table.string("ong_id").notNullable();
        //relacionar com a tabela ong
        table.foreign("ong_id").references("id").inTable("ongs");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("incidentes");
};
