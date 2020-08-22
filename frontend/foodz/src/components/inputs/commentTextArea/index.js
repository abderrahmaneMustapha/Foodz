import React from "react"
import "./comment.css"
import StarRatings from 'react-star-ratings';

class MainExistingComment extends  React.Component {

        render(){
            return(
                <div id="comment-container"  className="container">
                <div className="row">
                    <div className="col-md-1 col-sm-4">
                        <img className="rounded-circle" src={this.props.photo}></img>
                    </div>
                    <div className=" col-md-11 col-sm-8">
                        <header  className="d-md-flex">
                        <h5 className="font-weight-bold mr-4">{this.props.username}</h5>
                        <StarRatings 
                                        rating={parseFloat(this.props.review)}
                                        starRatedColor="#FFBF00"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="1.4em"
                                        starSpacing="1px"
                        s></StarRatings>
                        </header>
                        <div className="font-weight-light m-2">{this.props.text}</div>
                        <div id="comment-utils" className="d-flex flex-row align-items-center mt-3">
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
                            <div title="reply">
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

export {MainExistingComment }

