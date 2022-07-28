import React, { Component } from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>GreetPARENT/withoutparm</button> */}
        <button onClick={()=>props.greetHandler('hi from child')}>withparm</button>
    </div>
  )
}

export default MethodsAsPropsChild