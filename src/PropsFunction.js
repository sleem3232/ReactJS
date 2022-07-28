import React from "react";
const PROPS=props=>{
    console.log(props);
    return <h1>hello {props.name} {props.lastname}</h1>
}
export default PROPS

//*props is object that contain the
// arttubit and the values its pass from the parent 