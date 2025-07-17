import { useState } from "react";

function Counter(){
     const [counter,setCounter]=useState(0);
     const [rcounter,setRcounter]=useState(10);
    return(
        <>
   
    <h1>counter:{counter}</h1>
    <hr/>
    
    <button onClick={()=>setCounter(counter+1)}> update the counter</button>
    <button onClick={()=>setRcounter(rcounter-1)}>decrement counter</button>
    <hr/>
    <h1>rcounter:{rcounter}</h1>

    </>
    )
}
export default Counter;