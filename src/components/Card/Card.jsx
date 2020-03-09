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
      <div className='card__data'>
        <CardSatus cardStatus={cardStatus} />
        <div className='card__content-meta'>
          <div className='card__title-user-meta'>
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
          <div className='card__time-meta'>
            <CardTimeMeta date={date} time={time} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
