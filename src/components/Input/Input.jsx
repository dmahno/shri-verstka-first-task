import React from 'react';
import './Input.scss';

function Input({ label, placeholder, required = 'free' }) {
  return (
    <div className='form-list'>
      <span className='form-list input input_theme_normal'>
        <label className={`input__hint ${required}`}>{label}</label>
        <input
          className='input__control input_size_m'
          placeholder={placeholder}
        />
      </span>
    </div>
  );
}

export default Input;
