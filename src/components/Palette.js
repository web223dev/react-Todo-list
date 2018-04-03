import React from 'react';
import style from './Palette.scss';

const Color = ({color, active, onClick}) => {
  return (
    <div className={`${style.color} ${active && style.active}`} style={{background: color}} onClick={onClick}></div>
  );
};

const Palette = ({colors, selected, onSelect}) => {

  const ColorList = colors.map((color) => 
    <Color color={color} active={selected === color} onClick={() => onSelect(color)} key={color}/>
  );

  return (
    <div className={style.palette}>
      {ColorList}
    </div>
  );
};

export default Palette;