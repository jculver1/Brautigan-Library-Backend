
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {name: 'Adventure'},
        {name: 'All the Rest'},
        {name: 'Family'},
        {name: 'Future'},
        {name: 'Humor'},
        {name: 'Love'},
        {name: 'Meaning of Life'},
        {name: 'Natural World'},
        {name: 'Poetry'},
        {name: 'Social/Political/Cultural'},
        {name: 'Spirituality'},
        {name: 'Street Life'},
        {name: 'War and Peace'},
        {name: 'Digital'},
      ]);
    });
};
