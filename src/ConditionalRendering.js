import React, { Component } from 'react'

 class ConditionalRendering extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          islog:false
       }
     }
  render() {
      return(
          this.state.islog && <div>Wellcome salim</div>

      )
    //   return(
    //       this.state.islog?
    //       <div>Wellcome Guest</div>:
    //       <div>Wellcome salim</div>
    //   )
    //   let message
    //   if(this.state.islog){
    //       message=<div>Wellcome salim</div>

    //   }else{
    //       message=<div>
    //           Wellcome Guest
    //       </div>
    //   }
    //   return <div>{message} </div>
    //   if(this.state.islog){
    //       return (
    //           <div>Wellcome salim</div>
    //       )
            
    //   }else{
    //       return(
    //           <div>
    //               Wellcome Guest
    //           </div>
    //       )
    //   }
    // return (
    //     <div>
    //   <div>ConditionalRendering</div>
    //   <div>Wellcome Guest</div>
    //   </div>
    // )
  }
}

export default ConditionalRendering