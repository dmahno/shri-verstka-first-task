import React, { Component } from 'react';
import './Header.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: [
        {
          titleName: ['School CI server', 'philip1967/my-awesome-repo'],
          buttonName: ['Settings', 'Run build', 'Rebuild'],
          buttonIcon: ['settings', 'play', 'rebuild'],
          display: true
        }
      ]
    };
  }

  render() {
    let historyPageHeader = null;
    let location = window.location.pathname;
    const { header } = this.state;
    if (location === '/history' || location === '/details') {
      historyPageHeader = header[0].titleName[1];
    } else {
      historyPageHeader = header[0].titleName[0];
    }
    return (
      <header className='header header__content'>
        <Title titleName={historyPageHeader} />
        <div className='header__content-button'>
          {location === '/' ? (
            <Button
              icon={header[0].buttonIcon[0]}
              classNameElement='button_size_xs'
              classNameModifier='button_view button-size-small'
              name={header[0].buttonName[0]}
            />
          ) : location === '/history' ? (
            <Button
              icon={header[0].buttonIcon[1]}
              classNameElement='button_size_xs'
              classNameModifier='button_view button-size-small'
              name={header[0].buttonName[1]}
            />
          ) : location === '/details' ? (
            <Button
              icon={header[0].buttonIcon[2]}
              classNameElement='button_size_xs'
              classNameModifier='button_view button-size-small'
              name={header[0].buttonName[1]}
            />
          ) : null}
          {location === '/details' || location === '/history' ? (
            <Button
              icon={header[0].buttonIcon[0]}
              classNameElement='button_size_xs'
              classNameModifier='button_view button_size_small'
            />
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
