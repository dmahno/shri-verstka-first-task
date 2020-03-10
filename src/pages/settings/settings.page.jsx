import React from 'react';
import Input from '../../components/Input/Input';
import './settings.page.scss';
import Button from '../../components/Button/Button';

function Settings() {
  return (
    <form className='content__form'>
      <div className='content__title'>Settings</div>
      <div className='content__sub-title color_text_thirdly'>
        Configure repository connection and synchronization settings.
      </div>
      <div className='content__form-fields'>
        <Input
          label='GitHub repository '
          placeholder='user-name/repo-name'
          required='input-required'
        />
        <Input label='Build command ' placeholder='enter a command here' />
        <Input label='Main branch ' placeholder='enter a main branch here' />
        <Input
          label='Synchronize every '
          placeholder='10'
          width='input_width_small'
          modifierFlex='flex_row'
          afterText='minuties'
          modifierInputTheme='input_theme_big'
        />

        <div className='content__form-buttons flex_column_mobile margin_right_8_button padding_top_bottom_8'>
          <Button
            classNameModifierSize='button_size_n'
            classNameElement='button_theme_islands'
            classNameModifier='button_view_action margin_bottom_8_mobile '
            name='Save'
          />
          <Button
            classNameModifierSize='button_size_n'
            classNameElement='button_theme_islands'
            classNameModifier='button_view'
            name='Cancel'
          />
        </div>
      </div>
    </form>
  );
}

export default Settings;
