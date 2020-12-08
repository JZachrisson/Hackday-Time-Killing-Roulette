import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { truncate } from '../../utils/truncate';
import '../Items/ItemCard.css';

const BookCard = ({ book }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      {book ? (
        <li className="item">
          {book.title ? (
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
                    <h1>BOOK</h1>
                    <img
                      alt="random description"
                      className="image"
                      src={book?.imageLinks?.thumbnail}
                    />
                  </div>
                  <div className="item__info">
                    <h3>{book?.title}</h3>
                    <p>
                      <span className="info">Published:</span>{' '}
                      {book?.publishedDate}
                    </p>
                    <p>
                      <span className="info">Author:</span>{' '}
                      {book.authors && book.authors[0]}{' '}
                    </p>
                    <p>
                      <span className="info">Genre:</span>{' '}
                      {book.categories && book.categories[0]}{' '}
                    </p>
                    <p>{truncate(book?.description, 200)}</p>
                    <div className="btn-div">
                      <button className="btn item__btn">
                        <a
                          rel="noreferrer"
                          href={book?.infoLink}
                          target="_blank"
                        >
                          READ
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

export default BookCard;
