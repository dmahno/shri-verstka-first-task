import React from 'react';
import Input from '../../components/Input/Input';
import './settings.page.scss';
import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';

function Settings() {
  return (
    <div className='app-root settings-page__content'>
      <form className='settings-page__content form'>
        <div className='settings-page__content form-content__title'>
          Settings
        </div>
        <div className='settings-page__content form-content__sub-title'>
          Configure repository connection and synchronization settings.
        </div>
        <div className='settings-page__content form-fields'>
          <Input
            label='GitHub repository '
            placeholder='user-name/repo-name'
            required='required'
          />
          <Input label='Build command ' placeholder='enter a command here' />
          <Input label='Main branch ' placeholder='enter a main branch here' />
          <InputText label='Synchronize every ' placeholder='10' />
          <div className='settings-page__content form-fields buttons-area'>
            <Button
              classNameModifierSize='button_size_n'
              classNameElement='button_theme_islands'
              classNameModifier='button_view_action'
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
    </div>
  );
}

export default Settings;
