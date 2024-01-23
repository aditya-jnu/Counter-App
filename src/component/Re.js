import './Re.css'
function Re(props){
    function resetHandler(){
        console.log("Reset Button Clicked")
        props.re(0);
    }
    return(
        <div >
         <button className='button' onClick={resetHandler}>Reset</button>
        </div>
    )
}
export default Re;