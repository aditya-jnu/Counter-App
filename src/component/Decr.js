import './Decr.css'
function Decr(props)
{
    function decrHnadler(){
        console.log("Decrement Clicked");
        if(props.newValue-1>=0)
          props.decr(props.newValue-1);
    }
    return(
       <button className='decr' onClick={decrHnadler}>
        -
       </button>
    );
}
export default Decr;