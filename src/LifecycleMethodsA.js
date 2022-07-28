import React, { Component } from 'react'

export class LifecycleMethodsA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'salim'
      }
      console.log("LifecycleMethodsA")
    }
    static getDerivedStateFormProps(props,state){
        console.log("LifecycleMethodsA getDerivedStateFormProps")
        return null
    }
    componentDidMount(){
        console.log("DidMount")
    }
  render() {
      console.log("LifeCycleRender")
    return (
      <div>LifecycleMethodsA</div>
    )
  }
}

export default LifecycleMethodsA