import React from 'react';
import './Title.scss';

function Title({ titleName }) {
  return <div className='header__title title-grey'>{titleName}</div>;
}

export default Title;
