import React from 'react';
import './CardTitle.scss';

function CardTitle({ colorNumber, titleNumber, cardTitle }) {
  return (
    <div className='card__title'>
      <span className={`card__title number ${colorNumber}`}>
        &#35;{titleNumber}
      </span>
      <span className='card__title text'>{cardTitle}</span>
    </div>
  );
}

export default CardTitle;
