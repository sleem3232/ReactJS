import React, { Component } from 'react'

export class FormHandlingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Username:''
         ,
         Comments:'',
         topic:'react',
      }
    }
    HandlerUSER=(event)=>{
        this.setState({
            Username:event.target.value
        })

    }
    handelCommentChange=event=>{
        this.setState({
            Comments:event.target.value
        })
    }
    handeltopic=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handelSumbit=event=>{
    
        alert(`${this.state.Username} ${this.state.Comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
      
    return (
        <form onSubmit={this.handelSumbit}>
            <div>
                <label>User Name</label>
                <input type='text' value={this.state.Username} onChange={this.HandlerUSER}></input>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.Comments} onChange={this.handelCommentChange}></textarea>
            </div>
            <div>
                <label>
                    topic
                </label>
                <select value={this.state.topic} onChange={this.handeltopic}> 
                    <option value="react">react</option>
                    <option value="c">c</option>
                    <option value="angular">act</option>
                </select>
            </div>
            <div>
                <button>sumbit</button>
            </div>
        </form>
    )
  }
}

export default FormHandlingClass