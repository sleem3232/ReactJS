import React, { Component } from 'react'

export class BindingEventClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'click to know my name'
      }
      //therd way
      this.sendmes=this.sendmes.bind(this)
    }
    sendmes(){
        this.setState({
            message:'salim sheene'
        })
    }  sendmes1(){
        this.setState({
            message:'salim sheene'
        })
    }
    
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
      {/* ///  first way  <button onClick={this.sendmes.bind(this)}>Click!!</button> */}
          {/* second way <button onClick={()=>this.sendmes1()}>Click!!</button> */}
          {/* therd way <button onClick={this.sendmes1()}>Click!!</button> */}
      </div>
    )
  }
}

export default BindingEventClass