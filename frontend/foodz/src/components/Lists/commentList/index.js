import React from "react"
import "./comment.css"
import ReactDOMServer from 'react-dom/server';
import {ExistingComment,NewComment } from "../../inputs/commentTextArea/index"
let current_username  = "Mustapha"
let current_userimage = "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-1/p240x240/91818612_100248741644513_2244727394118139904_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=Jh8mckF5fyYAX889OWa&_nc_ht=scontent-mrs2-1.xx&tp=6&oh=3809d73d2fd0904a2ae191f08e2ead08&oe=5F6DEDF1"

class ReplyList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            replysList : this.props.replysList
        }       
        
    }

    render(){
        return(
            <ul  className="list-group comment-list-reply">
                                
            {this.state.replysList ? this.state.replysList.map((subelement, index)=>(
                <li key={"AZER"+index}  className="list-group-item">
                <ExistingComment
                    
                    classPlus = "reply-exisiting-comment-container"
                    text={subelement.text} 
                    username={subelement.username} 
                    photo={subelement.photo}
                />
                </li> 
            )                             
            ) : undefined}
        
             </ul>
        )
    }
}
class CommentList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            commentList : [],
            restaurant : this.props.restaurant,
            new_comment_stars : 0
        }
        this.handleAddReply = this.handleAddReply.bind()
        this.handleAddComment = this.handleAddComment.bind(this)
        this.handleStarsInNewComment = this.handleStarsInNewComment.bind(this)
    }
   
    componentDidMount(){
        this.GetRestaurantComments()
    }

    handleStarsInNewComment = (rating)=>{

        this.setState({
            new_comment_stars : rating
        })
    }
    // get comments for a specific restaurant
    GetRestaurantComments = ()=>{
        let result = []
        fetch(`http://localhost:8000/api/restaurant-comment/?restaurant__id=${this.state.restaurant.id}`)
        .then(response => response.json())
        .then(
            data=>{
                data.results.forEach(async element=>{
                    let comment = {}
                    comment.review = element.review
                    
                    await this.getComment(element.comment, comment)
                    
                    // add the comment to the results
                    result.push(comment)

                    // update the state 
                    this.setState({
                        commentList :  result
                    })
                
                })
                
            }
        )
    }
    /// get comment
    getComment =    async (data, comment)=>{
    
        await fetch(data)
        .then(response => response.json())
        .then(data=>{
            comment.id = data.id
            comment.text = data.text            
        })

    
    }

    // this fucntion will create a comment  but we need to add this comment to a specific restaurant
    PostComment = (text) =>{
        let form = new FormData()
        form.append("text", text)
        
        //form.append("user", `http://localhost:8000/api/users/${1}/`)
        let id =  undefined
        fetch("http://localhost:8000/api/comments/", {
            method: 'POST',
            body : form
        })
        .then(response => response.json())
        .then(data=>{        
            this.PostRestaurantComment(data.id, this.state.restaurant.id)
        })    
    }

    // here wehre we can add the comment and the restaurant to a one single model (RestaurantComment)
    PostRestaurantComment = (comment_id, restaurant_id)=>{
        let form = new FormData()
        form.append("comment", `http://localhost:8000/api/comments/${comment_id}/`)
        form.append("restaurant", `http://localhost:8000/api/restaurant/${restaurant_id}/`)
        form.append('review', this.state.new_comment_stars)
        fetch("http://localhost:8000/api/restaurant-comment/", {
            method: 'POST',
            body : form
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
        })
    }

    handleAddComment = (event)=>{
        event.preventDefault()
        
        // this is the hole comment list container
        let ul = document.getElementById('comment-list')

        // get the new comment from the text area comment
        let textarea = document.getElementById('new-comment-textarea').value
        this.PostComment(textarea)
        // get  current review
        // by getting the title of the star-ratings container 
        // this title will alawys contain the number of stars in the first case
        let current_review  = document.getElementById('new-comment-container').getElementsByClassName('star-ratings')[0].title[0]
    
        let tempCommentList = this.state.commentList 
        tempCommentList.unshift({
            text: textarea, username : current_username, photo : current_userimage, review : current_review, replys :[]
        })
        console.log(tempCommentList)
        
        this.setState({
            commentList : [...tempCommentList]
        })

    }

    handleAddReply  = (event)=>{
        let element = event.target

        // get the ul that contains the list of the replys of current comment
        let main_comment_li  = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        let main_comment_replys = main_comment_li.getElementsByClassName('comment-list-reply')[0]

        let li_comment_container  = document.createElement('li')
        li_comment_container.className = "list-group-item comment-temp-add"
        
        let can_reply = (main_comment_replys)=>{
           
            if(main_comment_replys.firstChild){
                
                if (!main_comment_replys.firstChild.className.includes("comment-temp-add")) return true
                else return false
            }
            else{
                return true
            }
        }
        
        if(can_reply(main_comment_replys)){

        let comment_element = `
        <div class="bg-white container comment reply-exisiting-comment-container">
        <div class="row"><div class="col-md-1 col-sm-4"><img class="rounded-circle" src="${current_userimage}">
        </div><div class=" col-md-11 col-sm-8"><header class="d-md-flex">
        <h5 class="font-weight-bold mr-4">${current_username}</h5></header>
        <div contentEditable="true" class="font-weight-light m-2 comment-text">add your comment here</div>
        <div class="comment-utils d-flex flex-row align-items-center mt-3">
        <button  class="d-block btn btn-link text-black reply-btn">share</button>
        </div></div></div></div>
        `
        li_comment_container.innerHTML = comment_element
        main_comment_replys.insertBefore(li_comment_container, main_comment_replys.firstChild)
        
        let data_key = element.getAttribute('data-key')
        // if we click on the font awsome icon that doesnt cotaine a key  
        // then lets find the element and get the key from it
        if (!data_key) {
             data_key = element.parentElement.getAttribute('data-key')
        }

        
        // get the current comment list from the state
        let commentList  =  this.state.commentList

       
        // a fucntion which  is going to find the comment by his id
        // then we update the replys of this comment
        let updateReplys = (id, comment, username, photo)=>{
            commentList.map(element=>{
                if(element.id==id){
                     element.replys.unshift({text:comment, username : username, photo : photo})
                }
            })
        }
        let share_button = main_comment_replys.getElementsByClassName('reply-btn')[0]
        share_button.addEventListener("click", event=>{
            // get the comment text
            let comment_text  = li_comment_container.getElementsByClassName('comment-text')[0].innerText
            // call the fucntion to update replys by id
            updateReplys(data_key,comment_text,current_username, current_userimage)  
            /// update the state 
            this.setState({
                commentList : commentList 
            })  
            li_comment_container.parentElement.removeChild(li_comment_container)     
        })        
        

        }
    }   

    render(){
        return(
            <ul  id="comment-list" className="list-group">
                <NewComment 
                handleRatingChange={this.handleStarsInNewComment} 
                myOnClick={this.handleAddComment}></NewComment>
                
                {
                    this.state.commentList.map( 
                    (element)=>(
                    <li  key = {element.id} className="list-group-item">
                        <>{console.log(" element ", element)}</>
                        <ExistingComment
                           data_key = {element.id}
                           handleAddReply={this.handleAddReply}
                           classPlus = "main-exisiting-comment-container"
                            text={element.text} 
                            username={element.username} 
                            photo={element.photo}
                            review={element.review}
                        />                       
                        <ReplyList  replysList={element.replys} />
                    </li>
                    )                  
                    )
                }
                
            </ul>
        )
    }
}

export { CommentList, ReplyList}