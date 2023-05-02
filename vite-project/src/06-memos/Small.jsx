import { memo } from "react"
//import React from 'react'
//React.memo() forma tradicional
export const Small = memo(({value})=>{
    console.log("me volvi a generar")
return(
    <small>{value}</small>
)

})