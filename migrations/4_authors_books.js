
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors_books', (table)=>{
      table.increments();
      table.integer('author_id')
      .notNullable()
      .references('id')
      .inTable('genres')
      .onDelete('CASCADE')
      .index();
      table.integer('book_id')
      .notNullable()
      .references('id')
      .inTable('genres')
      .onDelete('CASCADE')
      .index();
  })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('authors_books')
  };