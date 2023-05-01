import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm"


export const FormWithCustomHooks = () =>{
    const{formState, onInputChange,onResetForm,username,email,password} = useForm({
     username: "",
    email: "",
    password: "",
    

    })
// const {username, email, password} = formState;

return(
    <>
    <hr></hr>
     <h1>Form With Custom Hooks</h1>
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
    
    <input 
    type="password" 
    className="form-control mt-4"
    placeholder="password"
    name="password"
    value={password}
    onChange={onInputChange}
    />
    
<button onClick={onResetForm}className="btn btn-primary mt-2">Borrar</button>


    

    </>



)

}