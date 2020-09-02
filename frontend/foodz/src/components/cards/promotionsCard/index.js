import React from "react"
import "./card.css"

import Modal from "./modal/index"

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isopen : false
    }
    this.handleOpen = this.handleOpen.bind()
  }
  handleOpen = (event)=>{
    this.setState({
        isopen:true
    })
    document.body.style.position= "fixed"
  }

  handleClose = (event)=>{
    this.setState({
        isopen:false
    })      
    document.body.style.position= "unset"
  }


    render(){
        return(
          <>
            <div  
              onClick={this.handleOpen}
              data-target={"#modal-promotion-"+this.props.index}   
              className={`promotions-card  mb-2 px-1  bg-transparent ${this.props.md} ${this.props.sm} `}>
              <div className="card  bg-transparent  border-0">
                <div className="card-body">            
                    <img className="w-100 h-100 shadow"  src={this.props.src}></img>
                  {this.props.show_text ?
                    <div className="card-text">
                    {this.props.title}<br></br>
                    <p> 
                    {this.props.details}
                    </p>
                    </div>
                    : <></>
                  }
                </div>
              </div>
          </div>
          <Modal
            handleClose = {this.handleClose}
            isopen = {this.state.isopen}
            index = {this.props.index}
            imagesrc = {this.props.src}
            title = {this.props.title}
            details = {this.props.details}
            slug = {this.props.slug}
          />
          </>
        )
    }
 
}

export default Card