import React, { Component } from 'react'
import InputclassRef from './InputclassRef'

export class FocusRefclass extends Component {
    constructor(props) {
      super(props)
    
        this.componetRef=React.createRef()
    }
    clickhandler=()=>{
        this.componetRef.current.focusInput()
    }
  render() {
    return (
      <div>
        
      <InputclassRef ref={this.componetRef}/>
          <button onClick={this.clickhandler}>focus input</button>
      </div>
    )
  }
}

export default FocusRefclass