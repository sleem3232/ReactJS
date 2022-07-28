import React, { Component } from 'react'
import ContextF from './ContextF'
import Usercontext from './UserContext'

export class ContextE extends Component {
  render() {
    return (
      <div>
          Component E {this.context}
          <ContextF/>
      </div>
    )
  }
}
ContextE.contextType=Usercontext

export default ContextE