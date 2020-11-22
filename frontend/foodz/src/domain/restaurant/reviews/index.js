import React from "react"
import './reviews.css'
import {CommentList} from "../../../components/Lists/commentList/index"

class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            restaurant :  this.props.restaurant
        }
    }


    render(){
        
        return(
            <div className=" container mt-7 p-md-5 p-sm-0 bg-white">
                  <CommentList restaurant={this.props.restaurant} />
            </div>
          
        )
    }
}

export default Reviews