import React from "react";
import { useRef } from "react";
export const FocusScreen = ()=>{
const inputRef = useRef();


    const onClick= () =>{
        // document.querySelector('input').select(1);
        
        inputRef.current.select();
    }
    return(

        <>    
        <h1>Focus Screen</h1>
        <hr></hr>

        <input
        ref={inputRef}
        type="text"
        placeholder="escribe aqui"
        className="form-control"
        />
     
     
                <input
        type="text"
        placeholder="escribe aqui"
        className="form-control"
        />
                <input
        type="text"
        placeholder="escribe aqui"
        className="form-control"
        />
        <button className="btn btn-primary mt-2"
        onClick={onClick}
        >Set Focus</button>
        </>
   
    )
}