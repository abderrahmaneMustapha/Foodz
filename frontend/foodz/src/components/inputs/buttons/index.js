import React from "react"

export class Button extends React.Component{
    render(){
        if(this.props.color === "blue"){
            return <button type={this.props.type} className="btn btn-primary">Submit</button>
        }
    }
}