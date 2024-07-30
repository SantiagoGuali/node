/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customer', table =>
        {
            table.increments('id').primary();
            table.string('fisrtname').notNullable();
            table.string('lastname').notNullable();
            table.string('email').notNullable().unique();
            table.string('phone').notNullable;
            table.string('address').notNullable;
        });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('customer')
};
