
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name', 80).notNullable()
      table.string('email', 200).notNullable()
      table.string('password', 30).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
