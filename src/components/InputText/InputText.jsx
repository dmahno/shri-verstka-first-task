import React from 'react';
import './InputText.scss';

function InputText({ label, placeholder }) {
  return (
    <div className='input-text'>
      <span className='input-text input_theme_normal'>
        <label className='input__hint'>{label}</label>
        <span className='input__box'>
          <input
            type='number'
            min='1'
            className='input__control input_size_m input_width_small'
            placeholder={placeholder}
          />
        </span>
        <span className='input__after-text'>minuties</span>
      </span>
    </div>
  );
}

export default InputText;
