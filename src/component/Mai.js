import React, { useState} from 'react';
import Decr from './Decr';
import Disp from './Disp';
import Incr from './Incr';
import Re from './Re';
import './Mai.css'

function Mai(props)
{
  const[newValue , setnewValue]=useState(0);
 
    function disp(v){
     let va= v;
     setnewValue(va);
    }
    function decr(d){
     let di=d;
     setnewValue(di);
    }
    function incr(i){
     let inc = i;
     setnewValue(inc);
    }
    function re(x){
      let y=x;
      setnewValue(y); 
    }
    return(
    <div className='apps'>
      <div className='body'>
       <Decr newValue={newValue} decr={decr}/>
       <Disp newValue={newValue} disp={disp}/>
       <Incr newValue={newValue} incr={incr}/>
      </div>
      <div>
       <Re newValue={newValue} re={re}/>
      </div>
    </div>
    );
}
export default Mai;