import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PodcastCard from '../PodcastCard/PodcastCard';
import BookCard from '../BookCard/BookCard';
import './ItemList.css';

const ItemList = ({ movie, podcast, book }) => {
  return (
    <div className="item-list-container">
      <ul className="items-list">
        <MovieCard movie={movie} />
        <PodcastCard podcast={podcast} />
        <BookCard book={book} />
      </ul>
    </div>
  );
};

export default ItemList;
