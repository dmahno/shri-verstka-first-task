import React from 'react';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import image from '../../assets/icons/icon-main-page.svg';

const Main = () => {
  return (
    <div className='content flex_center'>
      <InfoBlock
        image={image}
        text='Configure repository connection and synchronization settings'
      />
    </div>
  );
};

export default Main;
