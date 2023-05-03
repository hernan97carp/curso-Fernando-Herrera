import { useCallback,useState } from "react"
import { ShowIncrement } from "./ShowIncrement";
//usecallback sirve para memorizar funciones regresa una funcion q yo puedo ejecutar
export const CallbackHook = ()=>{
const [counter, setCounter] = useState(10);

 const incrementFather= useCallback(()=>{
 setCounter((value)=>value + 1)
},[])


// const incrementFather = ()=>{
//     setCounter(counter + 1)
// }

return(
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}></ShowIncrement>

    </>
)

}