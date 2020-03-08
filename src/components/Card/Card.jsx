import React from 'react';
import './Card.scss';
import CardTitle from '../CardTitle/CardTitle';
import CardUserMeta from '../CardUserMeta/CardUserMeta';
import CardTimeMeta from '../CardTimeMeta/CardTimeMeta';
import './Card.scss';
import CardSatus from '../CardStatus/CardSatus';

function Card({
  cardStatus,
  colorNumber,
  titleNumber,
  commitNumber,
  brunchName,
  userName,
  date,
  time,
  cardTitle
}) {
  return (
    <div className='card'>
      <CardSatus cardStatus={cardStatus} />
      <div className='card__data'>
        <div className='card__user-information'>
          <CardTitle
            cardTitle={cardTitle}
            colorNumber={colorNumber}
            titleNumber={titleNumber}
          />
          <CardUserMeta
            brunchName={brunchName}
            commitNumber={commitNumber}
            userName={userName}
          />
        </div>
        <div className='card__user-information'>
          <CardTimeMeta date={date} time={time} />
        </div>
      </div>
    </div>
  );
}

export default Card;
