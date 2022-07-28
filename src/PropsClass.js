import React,{Component} from "react";
class PropsClass extends Component{
    render(){
        return <h1>Wellcome {this.props.name} {this.props.lastname}</h1>
    }
}
export default PropsClass