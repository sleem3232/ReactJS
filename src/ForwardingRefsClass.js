import React, { Component } from 'react'
import ForwardingRefsFunc from './ForwardingRefsFunc'

 class ForwardingRefsClass extends Component {
     constructor(props) {
       super(props)
     
        this.inputRef=React.createRef()
     }
     clickhandler=()=>{
         this.inputRef.current.focus()
     }
  render() {
    return (
      <div>
          <ForwardingRefsFunc ref={this.inputRef}/>
          <button onClick={this.clickhandler}>focus</button>
      </div>
    )
  }
}

export default ForwardingRefsClass