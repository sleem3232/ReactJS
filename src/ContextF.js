import React, { Component } from 'react'
import { UserCousumer } from './UserContext'

export class ContextF extends Component {
  render() {
    return (
     <UserCousumer>
         {
             (Username)=>{
                 return <div>Hello{Username}</div>

             }
         }
     </UserCousumer>
    )
  }
}

export default ContextF