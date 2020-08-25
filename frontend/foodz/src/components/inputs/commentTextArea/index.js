import React from "react"
import "./comment.css"
import StarRatings from 'react-star-ratings';

class ExistingComment extends  React.Component {
        constructor(props){
            super(props)
        }

    
        handleReply = (event)=>{
            let main_comment_li  = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            let main_comment_replys = main_comment_li.getElementsByClassName('comment-list-reply')[0]

            if(!main_comment_replys.firstChild.className.includes("comment-temp-add")){
                let list_element  = document.createElement('li')
                list_element.className = "list-group-item comment-temp-add"
                
                let comment_text_area_container = document.createElement('div')  
                comment_text_area_container.className  = "w-100 p-1" 
                let text_area = document.createElement('textarea')
    
                text_area.className = "w-100 from-control border-0"
                text_area.placeholder = "add comment here "
                let button_share = document.createElement('button')
                button_share.className = "btn btn-link text-dark"
                button_share.innerText = "share"
               
                comment_text_area_container.appendChild(text_area)
                comment_text_area_container.appendChild(button_share)
                list_element.appendChild(comment_text_area_container)
                
               
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
                        <div className="font-weight-light m-2">{this.props.text}</div>
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

