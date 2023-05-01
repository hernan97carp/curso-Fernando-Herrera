import React from "react";
import { useFetch } from "../hooks/useFetch";
export const MultipleCustomsHooks = () =>{
    const {} = useFetch('https://breakingbadapi.com/api/quotes/1')
    return(
        <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        </>
    )
}
//https://www.breakingbadapi.com/api/quotes/1