
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.text('biography');
    table.string('portrait')
  }).then(() => {
    return knex.schema.createTable('book_author', (table) => {
      table.increments();
      table.integer('book_id').references('id').inTable('book').onDelete('CASCADE');
      table.integer('author_id').references('id').inTable('author').onDelete('CASCADE');
    });
  })


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book_author').then(() => {
    return knex.schema.dropTable('author');
  })
};
