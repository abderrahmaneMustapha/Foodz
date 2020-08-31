import React from "react"
import "./card.css"

import Modal from "./modal/index"

class Card extends React.Component{
  constructor(props){
    super(props)
    
  }
  
    render(){
        return(
          <>
            <div  
              
              data-toggle="modal" 
              data-target={"#modal-promotion-"+this.props.index}   
              className={`promotions-card  mb-2 px-1  bg-transparent ${this.props.md} ${this.props.sm} `}>
              <div className="card  bg-transparent  border-0">
                <div className="card-body">            
                    <img className="w-100 h-100 shadow"  src={this.props.src}></img>
                  { this.props.show_text ?
                    <div className="card-text">

                    Restaurantes Vegetarianos En Barcelona<br></br>
                    <p > 
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                    </div>
                    : <></>
                  }
                </div>
              </div>
          </div>
          <Modal index = {this.props.index}/>
          </>
        )
    }
 
}

export default Card