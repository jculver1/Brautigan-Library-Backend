
exports.seed = function(knex, Promise) {
  return knex('authors').del()
    .then(function () {
      return knex('authors').insert([
        {name: 'Clio Wetmore'},
        {name: 'Pete Dunn'},
        {name: 'Peter Cooper'},
        {name: 'Ronny Kaye'}
      ]);
    });
};
