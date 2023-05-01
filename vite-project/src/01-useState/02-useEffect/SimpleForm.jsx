import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () =>{
const [formState, setFormState] = useState({
    username: "pablo",
    email:'pablo@google.com'
})
const {username, email} = formState
const onInputChange = ({target}) =>{
    const {name, value} = target

   setFormState({
    ...formState,
    [name]:value
   })
}

useEffect(()=>{
// console.log("se activo cheats")
},[])
useEffect(()=>{
    // console.log("form state change")
},[formState])
useEffect(()=>{
    // console.log("email change")
},[email])
return(
    <>
    <hr></hr>
     <h1>Simple Form </h1>
    <hr></hr>
    <input 
    type="text" 
    className="form-control"
    placeholder="UserName"
    name="username"
    value={username}
    onChange = {onInputChange}
    />
       <input 
    type="email" 
    className="form-control mt-4"
    placeholder="Hernan@hotmail.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />
    
    
    {
        (username === "pablo")&& <Message/>
    }
    </>



)

}