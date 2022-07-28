import React, { Component } from 'react'

 class SetStateClass extends Component {
     constructor(props){
         super(props)
         this.state={
             count : 0
             
         }
     }
     Incremnt(){
         this.setState(prevState=>({
            count:prevState.count +1

        }))
        
    }
    minus(){
        this.setState(prevState=>({
           count:prevState.count -1

       }))
       
   }
   multiplication(){
    this.setState(prevState=>({
       count:prevState.count * 2

   }))
   
}
Division(){
    this.setState(prevState=>({
       count:prevState.count / 2

   }))
   
}
  render() {
    return (
      <div>
     <div><h1> count {this.state.count}</h1></div>  
        <button onClick={()=>this.Incremnt()}>Increment</button>
     <h1>   <button onClick={()=>this.minus()}>minus</button></h1>
        <h1> <button onClick={()=>this.multiplication()}>multiplication</button></h1>
        <h1> <button onClick={()=>this.Division()}>Division</button></h1>
      </div>
    )
  }
}

export default SetStateClass