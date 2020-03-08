import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <ul className='footer__links'>
          <li className='footer__item'>
            <a href='#link' className='footer__link'>
              Support
            </a>
          </li>
          <li className='footer__item'>
            <a href='#link' className='footer__link'>
              Learning
            </a>
          </li>
        </ul>
        <div className='footer__copyright copyright'>&copy; 2020 Your Name</div>
      </div>
    </footer>
  );
};

export default Footer;
