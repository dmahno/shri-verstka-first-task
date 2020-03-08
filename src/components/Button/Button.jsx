import React from 'react';
import './Button.scss';

const Button = ({
  name,
  icon = 'none',
  classNameElement,
  classNameModifier,
  classNameModifierSize
}) => {
  return (
    <button
      className={`button ${classNameElement} ${classNameModifierSize} ${classNameModifier} button__control i-bem`}
    >
      <span className={`icon ${icon}`}></span>
      <span className='button__text'>{name}</span>
    </button>
  );
};

export default Button;
