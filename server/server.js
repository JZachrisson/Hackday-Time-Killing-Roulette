const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const unirest = require('unirest');
const dotenv = require('dotenv');

const port = 8080;
const app = express();
app.use(cors());

dotenv.config({ path: './config.env' });
app.get('/movies/:query', async (req, res) => {
  const query = req.params.query;
  const page = Math.floor(Math.random() * 5) + 1;
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&query=${query}&page=${page}`
  );

  const movies = await response.json();
  res.json(movies);
});

app.get('/podcasts/:query', async (req, res) => {
  const query = req.params.query;
  const page = Math.floor(Math.random() * 4) + 1;
  const response = await unirest
    .get(
      `https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0&page=${page}`
    )
    .header('X-ListenAPI-Key', process.env.ACCESS_KEY);
  const podcast = await response.toJSON();
  res.json(podcast.body.results);
});

app.get('/books/:query', async (req, res) => {
  const query = req.params.query;
  const page = Math.floor(Math.random() * 4) + 1;
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&langRestrict=en&page=${page}`
  );

  const books = await response.json();

  res.json(books.items);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
