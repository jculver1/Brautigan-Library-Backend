
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Clio Wetmore'},
        {name: 'Pete Dunn'},
        {name: 'Peter Cooper'},
        {name: 'Ronny Kaye'}
      ]);
    });
};
