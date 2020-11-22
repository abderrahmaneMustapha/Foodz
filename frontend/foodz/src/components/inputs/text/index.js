import React from "react";
import "./comment.css";
import StarRatings from "react-star-ratings";
import {getFirstLastName, checkUserExist} from "../../../utilities/userInfo/index"

class NewComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 1,
        };

        this.handleChangeRating = this.handleChangeRating.bind();
    }

    handleChangeRating = (newRating) => {
        console.log(newRating);
        this.setState({
            rating: newRating,
        });
        this.props.handleRatingChange(newRating);
    };

    render() {
       if ( ! checkUserExist ()) return <>{undefined}</>
        return (
            <form id="new-comment-container" className="w-100">
                <header>
                    <h5>Add new comment : </h5>
                    <h5 className="font-weight-bold mr-4">
                        {getFirstLastName()}
                    </h5>
                    <StarRatings
                        starHoverColor="#FFBF00"
                        starRatedColor="#FFBF00"
                        rating={this.state.rating}
                        numberOfStars={5}
                        changeRating={(rating) =>
                            this.handleChangeRating(rating)
                        }
                        name="new rating"
                        starDimension="1.7em"
                        starSpacing="1px"
                    ></StarRatings>
                </header>

                <textarea
                    id="new-comment-textarea"
                    className="w-100 my-3"
                    placeholder="add new comment"
                    required={true}
                ></textarea>
                <button
                    className="btn btn-success"
                    onClick={this.props.myOnClick}
                >
                    add comment
                </button>
            </form>
        );
    }
}

class ExistingComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ups: this.props.ups,
            downs: this.props.downs,
        };
        this.handleUpCommentVote = this.handleUpCommentVote.bind();
        this.handleDownCommentVote = this.handleDownCommentVote.bind();
    }

    postComment = (params) => {
        const restaurant_comment_id = this.props.restaurant_comment_key;

        let form = new FormData();
        form.append("user", `http://127.0.0.1:8000/api/users/${1}/`);
        form.append(
            "restaurant_comments",
            `http://127.0.0.1:8000/api/restaurant-comment/${restaurant_comment_id}/`
        );

        fetch(`http://127.0.0.1:8000/api/${params}/`, {
            method: "POST",
            body: form,
        })
            .then((response) => {
                console.log(response);
                if (response.status === 500) {
                    console.log(" you can not comment ");
                }
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    if (params === "restaurant-comment-vote-up") {
                        let new_ups = this.state.ups + 1;
                        this.setState({
                            ups: new_ups,
                        });
                    }

                    if (params === "restaurant-comment-vote-down") {
                        let new_downs = this.state.downs + 1;
                        this.setState({
                            downs: new_downs,
                        });
                    }
                }
            });
    };

    handleUpCommentVote = (event) => {
        this.postComment("restaurant-comment-vote-up");
    };

    handleDownCommentVote = (event) => {
        this.postComment("restaurant-comment-vote-down");
    };

    render() {
        return (
            <div
                key={this.props.data_key}
                className={"bg-white container comment " + this.props.classPlus}
            >
                <div className="row">
                    <div className="col-md-1 col-sm-4">
                        <img
                            className="rounded-circle"
                            src={this.props.photo}
                        ></img>
                    </div>
                    <div className=" col-md-11 col-sm-8">
                        <header className="d-md-flex">
                            <h5 className="font-weight-bold mr-4">
                                {this.props.first_name} {this.props.last_name}
                            </h5>
                            {this.props.type == "comment" ? (
                                <StarRatings
                                    rating={parseFloat(this.props.review)}
                                    starRatedColor="#FFBF00"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="1.4em"
                                    starSpacing="1px"
                                ></StarRatings>
                            ) : (
                                <></>
                            )}
                        </header>
                        <div className="font-weight-light m-2 comment-text">
                            {this.props.text}
                        </div>

                        {this.props.type == "comment" ? (
                            <div className="comment-utils d-flex flex-row align-items-center mt-3">
                                <div
                                    onClick={this.handleUpCommentVote}
                                    title="up vote"
                                >
                                    <i className="fas fa-chevron-up"></i>
                                    <span className="text-muted">
                                        {this.state.ups}
                                    </span>
                                </div>
                                .
                                <div
                                    onClick={this.handleDownCommentVote}
                                    title="down vote"
                                >
                                    <i className="fas fa-chevron-down"></i>
                                    <span className="text-muted">
                                        {this.state.downs}
                                    </span>
                                </div>
                                <div
                                    key={this.props.data_key}
                                    data-key={this.props.data_key}
                                    onClick={this.props.handleAddReply}
                                    title="reply"
                                >
                                    <i className="fas fa-reply"></i>
                                </div>
                                <a
                                    data-toggle="collapse"
                                    href={"#replys-list-" + this.props.data_key}
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Comment Replys list"
                                    className="ml-auto text-dark"
                                >
                                    {" "}
                                    see all{" "}
                                </a>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

class TextInput extends React.Component {
    render() {
        return (
            <input
                type={this.props.type}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                className="form-control"
                placeholder={this.props.placeholder}
            />
        );
    }
}

export { ExistingComment, NewComment, TextInput };
