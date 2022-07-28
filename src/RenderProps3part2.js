import React, { Component } from 'react'

export class RenderProps3part2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      handlerclick=()=>{
          this.setState(prevstate=>{
              return{count:prevstate.count+1}
          })
      }
  render() {
    return (
      <div>
          {this.props.render(this.state.count,this.handlerclick)}
      </div>
    )
  }
}

export default RenderProps3part2