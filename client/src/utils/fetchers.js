export const movieFetcher = async (query) => {
  try {
    const res = await fetch(
      `https://qroulette-app.herokuapp.com/movies/${query}`
    );
    const movies = await res.json();

    const randomNum = Math.floor(Math.random() * 20);
    return movies.results[randomNum];
  } catch (error) {
    console.log('MOVIE ERROR', error);
  }
};

export const podcastFetcher = async (query) => {
  try {
    const res = await fetch(
      `https://qroulette-app.herokuapp.com/podcasts/${query}`
    );
    const podcasts = await res.json();

    const randomNum = Math.floor(Math.random() * 10);
    return podcasts[randomNum];
  } catch (error) {
    console.log('PODCAST ERROR', error);
  }
};

export const bookFetcher = async (query) => {
  try {
    const res = await fetch(
      `https://qroulette-app.herokuapp.com/books/${query}`
    );
    const books = await res.json();

    const randomNum = Math.floor(Math.random() * 20);
    return books[randomNum].volumeInfo;
  } catch (error) {
    console.log('BOOK ERROR', error);
  }
};
