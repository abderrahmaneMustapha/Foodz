import React from "react"
import "./comment.css"
import {MainExistingComment } from "../../inputs/commentTextArea/index"
class CommentList extends React.Component{


    render(){
        return(
            <ul  id="comment-list" className="list-group ">
                {
                    this.props.commentList.map( 
                    element=>(
                    <li className="list-group-item">
                        <MainExistingComment
                            text={element.text} 
                            username={element.username} 
                            photo={element.photo}
                            review={element.review}
                        />
                    </li>
                    )                  
                    )
                }
                
            </ul>
        )
    }
}

export default CommentList