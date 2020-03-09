import React from 'react';
import './Input.scss';

function Input({
  label,
  placeholder,
  required = 'free',
  type = 'text',
  width = 'input_width_normal',
  afterText = '',
  modifierFlex = 'flex-column',
  modifierInputTheme = 'input_theme_normal'
}) {
  return (
    <div className={`input ${modifierInputTheme} ${modifierFlex}`}>
      <label className={`input__hint ${required}`}>{label}</label>
      <input
        type={type}
        className={`input__control input_size_m ${width}`}
        placeholder={placeholder}
      />
      <span className='input__after-text'>{afterText}</span>
    </div>
  );
}

export default Input;
