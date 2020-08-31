import React from "react"
import 'bootstrap'
import $ from 'jquery';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind()
    }
    handleClose = (event)=>{
        let close = event.target.className.includes("close") ? event.target: event.target.parentNode.className.includes("close")  ? event.target.parentNode : undefined
        if(close){
            let id = "#modal-promotion-"+this.props.index
            console.log($(id).modal("hide"))

        }
    }

    render(){
        return(
            <div className="modal fade" id={"modal-promotion-"+this.props.index}  
            tabIndex={"-1"}
            aria-labelledby={"modal-promotion-"+this.props.index} 
            aria-hidden="true">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close"  onClick={this.handleClose}  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                <p > 
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </p>
                </div>
            </div>
          </div>
        )
    }
}


export default  Modal