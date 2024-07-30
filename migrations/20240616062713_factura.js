/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('factura', table => {
        table.increments('id_factura').primary(); // Definir id_factura como clave primaria
        table.string('codigo').notNullable().unique(); // Definir codigo como único, pero no como clave primaria
        table.date('fecha_emision').notNullable();
        table.string('nota').notNullable();
        table.decimal('impuesto', 10, 2).notNullable();
        table.decimal('monto_total', 10, 2).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('factura');
};
