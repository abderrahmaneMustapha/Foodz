import React from "react"
import "./comment.css"
import {MainExistingComment, ReplyExistingComment } from "../../inputs/commentTextArea/index"
class CommentList extends React.Component{


    render(){
        return(
            <ul  id="comment-list" className="list-group">
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
                        <ul className="list-group comment-list-reply">
                        {element.replys.map(subelement=>(
                            <li className="list-group-item">
                            <ReplyExistingComment
                                text={subelement.text} 
                                username={subelement.username} 
                                photo={subelement.photo}
                             />
                            </li> 
                        )                             
                        )}
                        </ul>
                    </li>
                    )                  
                    )
                }
                
            </ul>
        )
    }
}

export default CommentList