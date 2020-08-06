import React from "react"
import "./card.css"


class Card extends React.Component{
    render(){
        return(
            <div className=" col-md-6 col-sm-12  mb-2  bg-transparent">
            <div className="card  bg-transparent  border-0">
              <div className="card-body">            
                  <img className="w-100 h-100 shadow"  src={this.props.src}></img>
                <div class="card-text">
                Restaurantes Vegetarianos En Barcelona<br></br>
                <p > 
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
 
}

export default Card