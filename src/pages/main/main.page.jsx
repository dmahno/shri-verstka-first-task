import React from 'react';
import './main.page.scss';
import BlockImage from '../../assets/icons/icon-main-page.svg';
import Button from '../../components/Button/Button';
import history from '../../history';

const Main = () => {
  return (
    <div className='app-root main-page__content'>
      <div className='app-root main-page__block'>
        <img src={BlockImage} alt='BlockImage' />
        <div className='app-root main-page__block-content'>
          <div className='app-root main-page__block-content-text'>
            Configure repository connection and synchronization settings
          </div>
          <Button
            classNameModifierSize='button_size_n'
            classNameElement='button_theme_islands'
            classNameModifier='button_view_action'
            name='Open Settings'
            onClick={() => history.push('/settings')}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
