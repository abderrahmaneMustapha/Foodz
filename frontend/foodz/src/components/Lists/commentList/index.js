import React from "react";
import "./comment.css";
import ReactDOMServer from "react-dom/server";
import {
  ExistingComment,
  NewComment,
} from "../../inputs/text/index";
let current_username = "Mustapha";
let current_userimage =
  "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-1/p240x240/91818612_100248741644513_2244727394118139904_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=Jh8mckF5fyYAX889OWa&_nc_ht=scontent-mrs2-1.xx&tp=6&oh=3809d73d2fd0904a2ae191f08e2ead08&oe=5F6DEDF1";

class ReplyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replysList: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.getReplys(this.props.replysList);
  }

  componentDidUpdate(prevProps) {
    if (this.props.replysList.length > prevProps.replysList.length) {
      this.setState({
        loading: true,
      });

      this.getReplys(this.props.replysList);
    }
  }

  getReplys = async (replysList) => {
    let replys = [];
    await replysList.forEach(async (element) => {
      await fetch(element)
        .then((response) => response.json())
        .then(async (data) => {
          await replys.push({
            id: data.id,
            username: data.user,
            text: data.text,
            photo: "",
          });
          await this.setState({
            replysList: replys,
          });
        });
    });
    await this.setState({
      loading: false,
    });
  };

  render() {
    if (this.state.loading === true) return <div>loading</div>;
    return (
      <ul
        id={"replys-list-" + this.props.data_key}
        className="list-group comment-list-reply"
      >
        {this.state.replysList && !this.state.loading
          ? this.state.replysList.map((subelement, index) => (
              <li
                key={`${subelement.id}-${this.props.data_key}`}
                className="list-group-item"
              >
                <ExistingComment
                  classPlus="reply-exisiting-comment-container"
                  text={subelement.text}
                  username={subelement.username}
                  photo={subelement.photo}
                />
              </li>
            ))
          : undefined}
      </ul>
    );
  }
}
class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
      next_commentList: "",
      previous_commentList: "",
      page: 1,
      total_pages: 0,
      loading_comments: true,
      restaurant: this.props.restaurant,
      new_comment_stars: 0,
      new_comment_id: null,
      new_comment_add_loading: true,
    };

    this.handleAddReply = this.handleAddReply.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleStarsInNewComment = this.handleStarsInNewComment.bind(this);
    this.getComment = this.getComment.bind(this);
    this.PostComment = this.PostComment.bind(this);
    this.PostReply = this.PostReply.bind(this);
    this.handleNextCommentsPage = this.handleNextCommentsPage.bind(this);
    this.handlePreviousCommentsPage = this.handlePreviousCommentsPage.bind(
      this
    );
  }

  async componentDidMount() {
    await this.GetRestaurantComments();
  }

  handleNextCommentsPage = (event) => {
    event.preventDefault()
    if(this.state.next_commentList){
      let page = this.state.page;
      page += 1;
      this.setState({
        page: page,
      });
      this.GetRestaurantComments();
    }
  };

  handlePreviousCommentsPage = (event) => {
    event.preventDefault()
    if(this.state.previous_commentList){
      let page = this.state.page;
      page -= 1;
      this.setState({
        page: page,
      });
      this.GetRestaurantComments();
    }
  
  };
  handleStarsInNewComment = (rating) => {
    this.setState({
      new_comment_stars: rating,
    });
  };
  // get comments for a specific restaurant
  GetRestaurantComments = async (event) => {
    let result = [];
    let url = `http://localhost:8000/api/restaurant-comment/?restaurant__id=${this.state.restaurant.id}&page=${this.state.page}`;
    await fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        await this.setState({
          next_commentList: data.next,
          previous_commentList: data.previous,
          total_pages: data.total_pages,
        });

        await data.results.forEach(async (element) => {
          let comment = {};
          comment.review = element.review ? element.review : 0.0;
          comment.restaurant_id = element.id;
          comment.ups = element.ups;
          comment.downs = element.downs;
          await this.getComment(element.comment, comment);

          // add the comment to the results
          await result.push(comment);
          // update the state
          this.setState({
            commentList: result,
            loading_comments: false,
          });
        });
      });
  };
  /// get comment
  getComment = async (data, comment) => {
    await fetch(data)
      .then((response) => response.json())
      .then((data) => {
        comment.id = data.id;
        comment.text = data.text;
        comment.replys = data.replys ? data.replys : [];
      });
  };

  // this fucntion will create a comment  but we need to add this comment to a specific restaurant
  PostComment = (text, type = "new", comment_id = undefined) => {
    let form = new FormData();
    form.append("text", text);

    //form.append("user", `http://localhost:8000/api/users/${1}/`)
    let id = undefined;
    fetch("http://localhost:8000/api/comments/", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (type === "new") {
          // get  current review
          // by getting the title of the star-ratings container
          // this title will alawys contain the number of stars in the first case
          let current_review = document
            .getElementById("new-comment-container")
            .getElementsByClassName("star-ratings")[0].title[0];
          let tempCommentList = this.state.commentList;
          tempCommentList.unshift({
            id: data.id,
            text: data.text,
            username: current_username,
            photo: current_userimage,
            review: current_review,
            replys: data.replys,
          });

          this.setState({
            commentList: tempCommentList,
            loading_comments: false,
          });

          await this.PostRestaurantComment(data.id, this.state.restaurant.id);
        }
        if (type === "reply") await this.PostReply(comment_id, data.id);
      });
  };

  // here wehre we can add the comment and the restaurant to a one single model (RestaurantComment)
  PostRestaurantComment = (comment_id, restaurant_id) => {
    let form = new FormData();
    form.append("comment", `http://localhost:8000/api/comments/${comment_id}/`);
    form.append(
      "restaurant",
      `http://localhost:8000/api/restaurant/${restaurant_id}/`
    );
    form.append("review", this.state.new_comment_stars);
    fetch("http://localhost:8000/api/restaurant-comment/", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  handleAddComment = async (event) => {
    event.preventDefault();

    // this is the hole comment list container
    let ul = document.getElementById("comment-list");

    // get the new comment from the text area comment
    let textarea = document.getElementById("new-comment-textarea").value;
    await this.PostComment(textarea);
  };

  PostReply = (comment_id, new_comment_id) => {
    fetch("http://localhost:8000/api/comments/" + comment_id + "/")
      .then((response) => response.json())
      .then(async (data) => {
        let replys = data.replys;

        if (replys) {
          replys.unshift(
            "http://localhost:8000/api/comments/" + new_comment_id + "/"
          );
        } else {
          replys = [
            "http://localhost:8000/api/comments/" + new_comment_id + "/",
          ];
        }

        this.updateReplys(comment_id, replys);

        let form = new FormData();
        await replys.forEach((element) => {
          form.append("replys", element);
        });

        await fetch("http://localhost:8000/api/comments/" + comment_id + "/", {
          method: "PUT",
          body: form,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("my reply return data", data);
          });
      });
  };

  updateReplys = (comment_id, replys) => {
    let commmentList__ = this.state.commentList;

    commmentList__.map((element) => {
      if (element.id == comment_id) {
        element.replys = replys;
      }
    });

    this.setState({
      commentList: commmentList__,
    });
  };

  handleAddReply = (event) => {
    let element = event.target;

    // get the ul that contains the list of the replys of current comment
    let main_comment_li =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode;

    let main_comment_replys = main_comment_li.getElementsByClassName(
      "comment-list-reply"
    )[0];

    let li_comment_container = document.createElement("li");
    li_comment_container.className = "list-group-item comment-temp-add";

    let can_reply = (main_comment_replys) => {
      if (main_comment_replys.firstChild) {
        if (
          !main_comment_replys.firstChild.className.includes("comment-temp-add")
        )
          return true;
        else return false;
      } else {
        return true;
      }
    };

    if (can_reply(main_comment_replys)) {
      let comment_element = `
        <div class="bg-white container comment reply-exisiting-comment-container">
        <div class="row"><div class="col-md-1 col-sm-4"><img class="rounded-circle" src="${current_userimage}">
        </div><div class=" col-md-11 col-sm-8"><header class="d-md-flex">
        <h5 class="font-weight-bold mr-4">${current_username}</h5></header>
        <div contentEditable="true" class="font-weight-light m-2 comment-text">add your comment here</div>
        <div class="comment-utils d-flex flex-row align-items-center mt-3">
        <button  class="d-block btn btn-link text-black reply-btn">share</button>
        </div></div></div></div>
        `;
      li_comment_container.innerHTML = comment_element;
      main_comment_replys.insertBefore(
        li_comment_container,
        main_comment_replys.firstChild
      );

      let data_key = element.getAttribute("data-key");
      // if we click on the font awsome icon that doesnt cotaine a key
      // then lets find the element and get the key from it
      if (!data_key) {
        data_key = element.parentElement.getAttribute("data-key");
      }

      let share_button = main_comment_replys.getElementsByClassName(
        "reply-btn"
      )[0];
      share_button.addEventListener("click", async (event) => {
        // get the comment text
        let comment_text = li_comment_container.getElementsByClassName(
          "comment-text"
        )[0].innerText;
        // call the fucntion to update replys by id
        console.log("comment data key is ", data_key);
        await this.PostComment(comment_text, "reply", data_key);
        li_comment_container.parentElement.removeChild(li_comment_container);
      });
    }
  };

  render() {
   
 
    console.log("total pages ", this.state.total_pages)
    let pages = Array.from({length:this.state.total_pages}, Number.call, i => i + 1)
    console.log(pages)
      return (
        <>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
            {this.state.previous_commentList ? (
              <li   id="go-previous" class="page-item disabled"  onClick={this.handlePreviousCommentsPage}>
                <a class="page-link" href="" tabindex="-1">
                  Previous
                </a>
              </li>
          ) : undefined}
              { pages.map(element=>(
                <li class={`page-item ${
                  this.state.page ===element ? "active" : ""
                }`}>
                <a class="page-link" href="">
                  {element}
                </a>
              </li>
              ))}
              
             
              {this.state.next_commentList ? (
                <li id="go-next" class="page-item" onClick={this.handleNextCommentsPage}>
                <a class="page-link" href="">
                  Next
                </a>
              </li>
          ) : undefined}
             
            </ul>
          </nav>
          
         

          <ul id="comment-list" className="list-group">
            <NewComment
              handleRatingChange={this.handleStarsInNewComment}
              myOnClick={this.handleAddComment}
            ></NewComment>
            {this.state.loading_comments === false ? (
              <>
                {this.state.commentList.map((element) => (
                  <li
                    data-key={element.id}
                    key={element.id}
                    className="list-group-item"
                  >
                    <ExistingComment
                      data_key={element.id}
                      restaurant_comment_key={element.restaurant_id}
                      handleAddReply={this.handleAddReply}
                      classPlus="main-exisiting-comment-container"
                      text={element.text}
                      username={element.username}
                      photo={element.photo}
                      review={element.review}
                      ups={element.ups}
                      downs={element.downs}
                      type="comment"
                    />

                    <ReplyList
                      data_key={element.id}
                      replysList={element.replys}
                      type="reply"
                    />
                  </li>
                ))}{" "}
              </>
            ) : (
              <div>Loading</div>
            )}
          </ul>
        </>
      );
  }
}


export { CommentList, ReplyList };
