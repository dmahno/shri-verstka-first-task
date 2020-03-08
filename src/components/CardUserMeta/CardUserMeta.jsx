import React from 'react';
import './CardUserMeta.scss';

function CardUserMeta({ brunchName, commitNumber, userName }) {
  return (
    <div className='user-meta'>
      <div className='user-meta__branches'>
        <i className='icon code-commit'></i>
        <span className='user-meta__branches-name'>{brunchName}</span>
        <span className='user-meta__commit-number'>{commitNumber}</span>
      </div>
      <div className='user-meta__user-info'>
        <i className='icon user'></i>
        <span className='user-meta__user-info-name'>{userName}</span>
      </div>
    </div>
  );
}

export default CardUserMeta;
