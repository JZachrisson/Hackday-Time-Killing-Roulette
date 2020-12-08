import React, { useState } from 'react';
import '../Items/ItemCard.css';
import { truncate } from '../../utils/truncate';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import ReactCardFlip from 'react-card-flip';

const base_url = 'https://image.tmdb.org/t/p/original';

const MovieCard = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {movie ? (
        <li className="item">
          {movie.popularity ? (
            <>
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className="flipcard-front">
                  <p className="questionMark">?</p>
                  <p className="flipcard-front-text">
                    It has now been decided for you.
                    <br /> On the other side awaits...
                  </p>
                  <div className="btn-div">
                    <button className="btn" onClick={handleFlip}>
                      CLICK TO TURN
                    </button>
                  </div>
                </div>

                <div className="item__image">
                  <h1>MOVIE</h1>
                  <img
                    alt="random description"
                    className="image"
                    src={`${base_url}${movie?.backdrop_path}`}
                  />

                  <div className="item__info">
                    <h3>{movie.title}</h3>
                    <p>
                      <span className="info">Released: </span>{' '}
                      {movie?.release_date}
                    </p>
                    <p>
                      <span className="info">Rating: </span>
                      {movie?.vote_average}
                    </p>
                    <p>{truncate(movie?.overview, 200)}</p>
                  </div>
                  <div className="btn-div">
                    <button className="btn" onClick={() => handleClick(movie)}>
                      WATCH TRAILER
                    </button>
                  </div>
                  {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
                </div>
              </ReactCardFlip>
            </>
          ) : (
            <p className="questionMark">?</p>
          )}
        </li>
      ) : (
        <li className="item">
          <p className="no-results">Nothing was found for you.</p>
        </li>
      )}
    </>
  );
};
export default MovieCard;
