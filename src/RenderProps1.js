import React, { Component } from 'react'

export class RenderProps1 extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // handlerclick=()=>{
    //     this.setState(prevstate=>{
    //         return{count:prevstate.count+1}
    //     })
    // }
  render() {
    
        const {count,handlerclick}=this.props
        return     <button onClick={handlerclick}>click x times{count}</button>
    
  }
}

export default RenderProps1