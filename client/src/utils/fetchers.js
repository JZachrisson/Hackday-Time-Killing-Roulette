export const movieFetcher = async (query) => {
  try {
    const res = await fetch(`http://localhost:8080/movies/${query}`);
    const movies = await res.json();
    console.log('MOVIES', movies);
    const randomNum = Math.floor(Math.random() * 20);
    return movies.results[randomNum];
  } catch (error) {
    console.log('MOVIE ERROR', error);
  }
};

export const podcastFetcher = async (query) => {
  try {
    const res = await fetch(`http://localhost:8080/podcasts/${query}`);
    const podcasts = await res.json();
    console.log('PODCASTS', podcasts);
    console.log('PODCASTS LENGTH', podcasts.length);
    const randomNum = Math.floor(Math.random() * 10);
    return podcasts[randomNum];
  } catch (error) {
    console.log('PODCAST ERROR', error);
  }
};

export const bookFetcher = async (query) => {
  try {
    const res = await fetch(`http://localhost:8080/books/${query}`);
    const books = await res.json();
    console.log('BOOKS', books);
    const randomNum = Math.floor(Math.random() * 20);
    return books[randomNum].volumeInfo;
  } catch (error) {
    console.log('BOOK ERROR', error);
  }
};
