import React, { Component } from 'react'
import { PureComponent } from 'react'
import PureComponents from './PureComponents'
import ReqComponent from './ReqComponent'


export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'salim'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:'salim'
            })
        },1000)
    }
  render() {
      console.log("parent")
    return (
      <div>ParentComponent
          <ReqComponent name={this.state.name}/>
          <PureComponents name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent