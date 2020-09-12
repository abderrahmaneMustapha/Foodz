import React from "react"

class Checkbox extends React.Component{

    render(){
        return(
        <div className="form-check">
            <input 
            name={this.props.name} 
            className="form-check-input" 
            type="checkbox" 
            id={"filter-check" + this.props.text } 
            onClick={this.props.handle_filters}
            />
            <label  className="form-check-label" for={"filter-check" + this.props.text }>
                {this.props.text}
            </label>
        </div>
        )
    }
}

export default  Checkbox