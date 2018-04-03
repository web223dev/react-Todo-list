import React from 'react';
import style from './Form.scss';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {  
  return (
    <div className={style.form}>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color: color}}/>
      <div className={style.create_button} onClick={onCreate}>
        ADD
      </div>
    </div>
  );
};

export default Form;