exports.up = function(knex, Promise) {
  return knex.schema.createTable('bears', tbl => {
    tbl.increments();

    tbl
      .integer('zooId')
      .unsigned()
      .references('id')
      .inTable('zoos')
      .notNullable();

    tbl
      .string('species', 80)
      .notNullable()
      .unique('species');

    tbl.string('latinName', 80).notNullable();

    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bears');
};
