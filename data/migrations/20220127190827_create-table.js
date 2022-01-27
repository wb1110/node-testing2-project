exports.up = function (knex) {
  return knex.schema.createTable('testing', (table) => {
    table.increments('testing_id');
    table.string('full_name').notNullable().unique();
    table.string('email').notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('testing');
};
