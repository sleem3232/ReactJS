import React, { Component } from 'react'

export class RenderProps3 extends Component {
  render() {
    return (
    //   <div>{this.props.name(false)}</div>
    <div>{this.props.render(false)}</div>
    )
  }
}

export default RenderProps3