import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
  return (
    <div id='cont-1'>
      <div id='cont-2'>
        { props.children }
      </div>
    </div>
  );
};

export default Scroll;