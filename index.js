const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
const parser = require('body-parser')
const knex = require('./knex');

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
    knex('books')
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/genres', (req, res) => {
    knex('genres').join('books', 'books.genre_id', 'genres.id')
    .then((genres) => {
      res.send(genres);
    })  
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))