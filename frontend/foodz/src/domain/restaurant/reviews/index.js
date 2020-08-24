import React from "react"
import './reviews.css'
import CommentList from "../../../components/Lists/commentList/index"
const comments  =[{text: 'Opening his morning comment, she read. He repeated her comment about the Porsche, "Nice wheels." Without comment, he shifted his attention back to his plate. She sensed this comment was directed at her. It was this that saved her from some snide comment about her less-than-fashionable clothes', username : "Abderrahmane", photo : "https://avatars3.githubusercontent.com/u/34008130?s=460&u=5183a8fc438d75db4c5c8f081d0ef3ffc91f97a4&v=4", review : 2.4
,replys : [{text: "text text text text", username : "Abderrahmane", photo : "https://avatars3.githubusercontent.com/u/34008130?s=460&u=5183a8fc438d75db4c5c8f081d0ef3ffc91f97a4&v=4"}]},
{text: "text text text text", username : "Abderrahmane", photo : "https://avatars3.githubusercontent.com/u/34008130?s=460&u=5183a8fc438d75db4c5c8f081d0ef3ffc91f97a4&v=4", review : 2.4,
replys : [{text: "text text text text", username : "Abderrahmane", photo : "https://avatars3.githubusercontent.com/u/34008130?s=460&u=5183a8fc438d75db4c5c8f081d0ef3ffc91f97a4&v=4"}]},
{text: "text text text text", username : "Abderrahmane", photo : "https://avatars3.githubusercontent.com/u/34008130?s=460&u=5183a8fc438d75db4c5c8f081d0ef3ffc91f97a4&v=4", review : 2.4,
replys : [{text: "text text text text", username : "Abderrahmane", photo : "https://avatars3.githubusercontent.com/u/34008130?s=460&u=5183a8fc438d75db4c5c8f081d0ef3ffc91f97a4&v=4"}]}]
class Reviews extends React.Component{

    render(){
        return(
            <div className=" container mt-7 p-md-5 p-sm-0 bg-white">
                  <CommentList  commentList={comments}/>
            </div>
          
        )
    }
}

export default Reviews