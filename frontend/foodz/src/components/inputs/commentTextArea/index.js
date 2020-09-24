import React from "react"
import "./comment.css"
import StarRatings from 'react-star-ratings';


let current_username  = "Mustapha"
let current_userimage = "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-1/p240x240/91818612_100248741644513_2244727394118139904_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=Jh8mckF5fyYAX889OWa&_nc_ht=scontent-mrs2-1.xx&tp=6&oh=3809d73d2fd0904a2ae191f08e2ead08&oe=5F6DEDF1"

class NewComment extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            rating : 0
        }

        
        this.handleChangeRating = this.handleChangeRating.bind()
    }

    handleChangeRating = (newRating)=>{
        console.log(newRating)
        this.setState({
            rating: newRating
        });
        this.props.handleRatingChange(newRating)
    }



    render(){
        return(
            <form id="new-comment-container" className="w-100">
                <header>                
                    <h5>Add new comment : </h5>
                    <StarRatings 
                        starHoverColor = "#FFBF00"
                        starRatedColor="#FFBF00"
                        rating={this.state.rating}
                        numberOfStars={5}
                        changeRating={rating => this.handleChangeRating(rating)}
                        name='new rating'
                        starDimension="1.7em"
                        starSpacing="1px"
                    ></StarRatings>
                </header>
                
                <textarea id="new-comment-textarea" className="w-100 my-3" placeholder="add new comment" required={true}>

                </textarea>
                <button className="btn btn-success" onClick={this.props.myOnClick}>add comment</button>
            </form>
        )
    }
}


class ExistingComment extends  React.Component {

        render(){
            return(
                <div   key={this.props.key} className={"bg-white container comment "+this.props.classPlus}>
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
                        <div  className="font-weight-light m-2 comment-text">{this.props.text}</div>
                        <div      className="comment-utils d-flex flex-row align-items-center mt-3">
                            <div  title="up vote">
                                <i  className="fas fa-chevron-up"></i>
                                <span  className="text-muted">33 </span>
                            </div> 
                            . 
                            <div title="down vote">
                                <i  className="fas fa-chevron-down"></i>
                                <span className="text-muted">33 </span>
                            </div>
                            { this.props.review ?
                            <div 
                                key={this.props.data_key}
                                data-key={this.props.data_key}
                                onClick={this.props.handleAddReply} 
                                title="reply">
                                <i  className="fas fa-reply"></i>
                            </div>:
                            <></>
                            }
                            <span className="ml-auto"> see all </span>
                        </div>                        
                    </div>
                </div>                   
                    
                </div>
            )
        }
        

}




export {ExistingComment, NewComment }

