import React, { Component } from 'react'

 class ReqComponent extends Component {
  render() {
    console.log("req")
    return (
      <div>ReqComponent
          {this.props.name}
      </div>
    )
  }
}

export default ReqComponent