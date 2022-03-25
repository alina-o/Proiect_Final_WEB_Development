import React from 'react';
import '../../../Styles/Genre.css';
import { Link } from 'react-router-dom';


function SelfCardItem(props) {
  return (
    <>
      <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
         <figure className='cards__item__pic-wrap34' data-category={props.label}>
            </figure>
                      <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
      </li>
    </>
  );
}

export default SelfCardItem;