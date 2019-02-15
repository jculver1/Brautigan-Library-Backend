
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table)=>{
      table.increments();
      table.string('title').notNullable().defaultTo('');
      table.string('description').notNullable().defaultTo('');
      table.timestamp('post_date_time').defaultTo(knex.fn.now());
      table.integer('genre_id')
      .notNullable()
      .references('id')
      .inTable('genres')
      .onDelete('CASCADE')
      .index();
  })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books')
  };
  