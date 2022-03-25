import React from 'react';
import { Link } from 'react-router-dom';

function GenreCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
   
          </figure>
        </Link>
      </li>
    </>
  );
}

export default GenreCardItem;