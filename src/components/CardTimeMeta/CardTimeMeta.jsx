import React from 'react';
import './CardTimeMeta.scss';

function CardTimeMeta({ date, time }) {
  return (
    <div className='time-meta'>
      <div className='time-meta__date'>
        <i className='icon calendar'></i>
        {date}
      </div>
      <div className='time-meta__time'>
        <i className='icon stopwatch'></i>
        {time}
      </div>
    </div>
  );
}

export default CardTimeMeta;
