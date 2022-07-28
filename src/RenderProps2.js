import React, { Component } from 'react'

export class RenderProps2 extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   handlerclick=()=>{
    //       this.setState(prevstate=>{
    //           return{count:prevstate.count+1}
    //       })
    //   }
  render() {
    const {count,handlerclick}=this.props
    return (
        <h2 onMouseOver={handlerclick}>RenderProps2{count}</h2>
    )
  }
}

export default RenderProps2