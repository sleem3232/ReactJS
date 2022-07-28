import React, { Component } from 'react'
//in class we use "this"
export class EventHandlingClass extends Component {
    ClickHandler(){
        console.log('click button')
    }
  render() {
    return (
      <div>
          <button onClick={this.ClickHandler}>Click me</button>
      </div>
    )
  }
}

export default EventHandlingClass