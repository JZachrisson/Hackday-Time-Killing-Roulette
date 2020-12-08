import React, { useState } from 'react';
import './App.css';
import { GoOctoface } from 'react-icons/go';
import Form from './components/Form/Form';
import ItemList from './components/Items/ItemList';
import { movieFetcher, podcastFetcher, bookFetcher } from './utils/fetchers';
import apilogo from './apidark.png';
import apilogomovie from './movieapi.svg';

function App() {
  const [movie, setMovie] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [book, setBook] = useState([]);

  const handleChange = (e) => {
    movieFetcher(e).then((res) => {
      setMovie(res);
    });
    podcastFetcher(e).then((res) => {
      setPodcast(res);
    });
    bookFetcher(e).then((res) => {
      setBook(res);
    });
  };

  return (
    <div className="App">
      <header>
        <div className="header">
          <span className="headline">Qroulette</span>
          <br />
          <span className="sub-headline">
            -A quarantine time-killing roulette
          </span>
        </div>
      </header>
      <main className="content">
        <div className="description">
          <h2>
            Indecisive? Uncertain? Worried? <br />
            Too much to choose from?
          </h2>
          <p>
            Let this time killing aggregator randomize
            <br /> what your next quarantine-indulgence shall be. <br />
            You might just discover something new and amazing.
          </p>
          <Form handleChange={handleChange} />
        </div>

        <ItemList movie={movie} podcast={podcast} book={book} />
      </main>
      <footer className="footer">
        <p>&#169; Jesper Zachrisson</p>
        <div className="footer-links">
          <a
            rel="noreferrer"
            href="https://github.com/JZachrisson/Hackday-Time-Killing-Roulette"
            target="_blank"
          >
            <GoOctoface />
          </a>
        </div>
        <img className="api-logo" alt="api-logo" src={apilogo} />
        <img className="api-logo" alt="api-logo" src={apilogomovie} />
      </footer>
    </div>
  );
}

export default App;
