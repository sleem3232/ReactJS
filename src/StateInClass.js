import React,{Component} from "react";
class StateClass extends Component{
    constructor(){
        super()
        this.state={
            message:'Click to Know my Name'
        }
    }
    changemessage(){
        this.setState({
            message:'my name is salim'
        })
    }

    render(){
        return (
            <div>
<h1>{this.state.message}</h1>
<button onClick={()=>this.changemessage()}>Check</button>
            </div>
        )

    }
}
export default StateClass