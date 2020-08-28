import React from "react"
import "./comment.css"
import ReactDOMServer from 'react-dom/server';
import {ExistingComment,NewComment } from "../../inputs/commentTextArea/index"
let current_username  = "Mustapha"
let current_userimage = "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-1/p240x240/91818612_100248741644513_2244727394118139904_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=Jh8mckF5fyYAX889OWa&_nc_ht=scontent-mrs2-1.xx&tp=6&oh=3809d73d2fd0904a2ae191f08e2ead08&oe=5F6DEDF1"


class CommentList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            commentList : this.props.commentList
        }
        
        this.handleAddComment = this.handleAddComment.bind()
    }

    handleAddComment = (event)=>{
        event.preventDefault()
        // convert string to html node
        console.log("firsr to ttry this weird thing")
        var stringToHTML = function (str) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(str, 'text/html');
            return doc.body.firstChild;
        };

        // this is the hole comment list container
        let ul = document.getElementById('comment-list')
        // get the new comment from the text area comment
        let textarea = document.getElementById('new-comment-textarea').value
        
        // 
        // get  current review
        // by getting the title of the star-ratings container 
        // this title will alawys contain the number of stars in the first case
        let current_review  = document.getElementById('new-comment-container').getElementsByClassName('star-ratings')[0].title[0]
        console.log(current_review)
        let tempCommentList = this.state.commentList 
        tempCommentList.push({
            text: textarea, username : current_username, photo : current_userimage, review : current_review, replys :[]
        })
        console.log(tempCommentList)
        
        this.setState({
            commentList : [...tempCommentList]
        })

    }

    render(){
        return(
            <ul  id="comment-list" className="list-group">
                <NewComment myOnClick={this.handleAddComment}></NewComment>
                
                {
                    this.state.commentList.map( 
                    (element, index)=>(
                    <li  key = {index} className="list-group-item">
                        <ExistingComment
                           classPlus = "main-exisiting-comment-container"
                            text={element.text} 
                            username={element.username} 
                            photo={element.photo}
                            review={element.review}
                        />
                        
                            <ul  className="list-group comment-list-reply">
                                
                                    { element.replys.map((subelement, index)=>(
                                        <li key={"AZER"+index}  className="list-group-item">
                                        <ExistingComment
                                            classPlus = "reply-exisiting-comment-container"
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