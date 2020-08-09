import React from "react"


class ButtonRadio extends React.Component{

    render(){
        return(
            <label className={"btn btn-outline-primary "+ this.props.style}   for={"id-"+this.props.id}>
            <input 
                type="radio" 
                name={this.props.name} 
                id={"id-"+this.props.id}
                autoComplete={false} 
                checked={this.props.checked}
            />
            {this.props.text}
            </label>
        )
    }
}

export default ButtonRadio