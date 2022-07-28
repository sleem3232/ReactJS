import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

 class MethodsAsProps extends Component {
constructor(props) {
  super(props)

  this.state = {
     ParentName:'parent'
  }
  this.greetparent=this.greetparent.bind(this)
}   
// greetparent(){
//     alert(`hello ${this.state.ParentName}`)
// }
greetparent(childName){
        alert(`hello ${this.state.ParentName} from ${childName}`)
    }   
  render() {
    return (
      <div>
          <MethodsAsPropsChild greetHandler={this.greetparent} />
      </div>
    )
  }
}

export default MethodsAsProps