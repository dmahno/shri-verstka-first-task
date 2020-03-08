import React from 'react';
import './CardSatus.scss';

function CardSatus({ cardStatus }) {
  return (
    <div className='card__status'>
      <i className={`icon ${cardStatus}`}></i>
    </div>
  );
}

export default CardSatus;
