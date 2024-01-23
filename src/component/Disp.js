import React from 'react';
import './Disp.css';

function Disp(props){
  function valueHan(){
     return props.newValue;
  }
  return(
    <div className='disp'>
      {valueHan()}
    </div>
  )    
}
export default Disp;