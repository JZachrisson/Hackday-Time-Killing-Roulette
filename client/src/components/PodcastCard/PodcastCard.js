import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { truncate } from '../../utils/truncate';
import '../Items/ItemCard.css';

const PodcastCard = ({ podcast }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const dateObject = new Date(podcast?.pub_date_ms);
  const humanDateFormat = dateObject.toDateString();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      {podcast ? (
        <li className="item">
          {podcast.audio ? (
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
                <div>
                  <div className="item__image">
                    <h1>PODCAST</h1>
                    <img
                      alt="random description"
                      className="image"
                      src={podcast?.image}
                    />
                  </div>
                  <div className="item__info">
                    <h3>{podcast?.title_original}</h3>
                    <p>
                      <span className="info">Released: </span>
                      {humanDateFormat}
                    </p>
                    <p>{truncate(podcast?.description_original, 200)}</p>
                    <div className="btn-div">
                      <button className="btn item__btn">
                        <a
                          rel="noreferrer"
                          href={podcast?.audio}
                          target="_blank"
                        >
                          LISTEN
                        </a>
                      </button>
                    </div>
                  </div>
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

export default PodcastCard;
