import React from "react"
import "./comment.css"
import StarRatings from 'react-star-ratings';

let current_username  = "Mustapha"
let current_userimage = "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-1/p240x240/91818612_100248741644513_2244727394118139904_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=Jh8mckF5fyYAX889OWa&_nc_ht=scontent-mrs2-1.xx&tp=6&oh=3809d73d2fd0904a2ae191f08e2ead08&oe=5F6DEDF1"
class ExistingComment extends  React.Component {
        constructor(props){
            super(props)
        }

    
        handleReply = (event)=>{
            let main_comment_li  = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            let main_comment_replys = main_comment_li.getElementsByClassName('comment-list-reply')[0]

            if(!main_comment_replys.firstChild.className.includes("comment-temp-add")){
                
                // create new element in the list 
                // by cloning the first child (li) of the replys list
                let list_element =  main_comment_replys.firstChild.cloneNode(true)
                // edit the comment text
                list_element.classList.add('comment-temp-add')
                let comment_text_area = list_element.getElementsByClassName('comment-text')[0]
                comment_text_area.innerText = "Comment here"
                // make the div editable
                comment_text_area.contentEditable = true
                // set the image to the current user image 
                list_element.getElementsByTagName('img')[0].src = current_userimage
                // set the user name to the current user username
                list_element.getElementsByTagName('h5')[0].innerText = current_username
                // get the comment utils   
                let comment_utils = list_element.getElementsByClassName('comment-utils')[0]
                comment_utils.remove()

                // create a share button
                let share_button = document.createElement("button")
                share_button.className = "d-block btn btn-link text-black"
                share_button.innerText = "share"
                // add classs and style
                share_button.addEventListener("click", event=>{
                    share_button.replaceWith(comment_utils)
                    comment_text_area.contentEditable = false
                })
                list_element.getElementsByClassName('col-md-11')[0].appendChild(share_button)

                // remove the comment utils            
                main_comment_replys.insertBefore(list_element, main_comment_replys.firstChild);
            }
           
      
        }
        render(){
            return(
                <div  key={this.props.key} className={"container comment "+this.props.classPlus}>
                <div className="row">
                    <div className="col-md-1 col-sm-4">
                        <img className="rounded-circle" src={this.props.photo}></img>
                    </div>
                    <div className=" col-md-11 col-sm-8">
                        <header  className="d-md-flex">
                        <h5 className="font-weight-bold mr-4">{this.props.username}</h5>
                        { this.props.review ?
                        <StarRatings 
                                        rating={parseFloat(this.props.review)}
                                        starRatedColor="#FFBF00"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="1.4em"
                                        starSpacing="1px"
                        ></StarRatings>:
                        <></>
                        }
                        </header>
                        <div className="font-weight-light m-2 comment-text">{this.props.text}</div>
                        <div  className="comment-utils d-flex flex-row align-items-center mt-3">
                            <div title="up vote">
                                <i className="fas fa-chevron-up"></i>
                                <span className="text-muted">33 </span>
                            </div> 
                            . 
                            <div title="down vote">
                                <i  className="fas fa-chevron-down"></i>
                                <span className="text-muted">33 </span>
                            </div>
                            . 
                            <div onClick={this.handleReply} title="reply">
                                <i className="fas fa-reply"></i>
                            </div>
                            <span className="ml-auto"> see all </span>
                        </div>                        
                    </div>
                </div>                   
                    
                </div>
            )
        }
        

}


export {ExistingComment }

