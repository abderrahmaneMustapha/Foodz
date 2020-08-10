import React from "react"
import './circle.css'
class FoodCircle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            width : this.props.width,
            height : this.props.height,
            opacity : this.props.opacity,
            photo : this.props.photo
        }
    }

    render(){
              

        return(
            
            <img src={this.state.photo} ></img>
        
        )
    }
}

export default FoodCircle