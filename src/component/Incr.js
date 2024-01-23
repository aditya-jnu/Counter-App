import './Incr.css'
function Incr(props){
    function incrHandler(){
        console.log("Increment Clicked")
        props.incr(props.newValue+1);
    }
   return(
    <button className='incr' onClick={incrHandler}>
      +
    </button>
   )
}
export default Incr;