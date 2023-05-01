import React from "react";
import { useCounter } from "../hooks/useCounter";
export const CounterWithCustomHooks = ()=>{
    const {counter,increment,reset,decrement} = useCounter();
    return(
  <>
  <hr></hr>
    <h1>Counter With CustomHooks: {counter}</h1>
  
  <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
  <button className="btn btn-primary" onClick={reset}>reset</button>
  <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
  
  <hr></hr>
  
  </>
    )
}