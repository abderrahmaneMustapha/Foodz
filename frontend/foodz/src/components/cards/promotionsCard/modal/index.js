import React from "react"
import ReactModal from 'react-modal';
import  './modal.css'

const customStyles = {
    section: {
        marginTop : "1em"
    }
  };
ReactModal.setAppElement('#root')
class Modal extends React.Component{
  

    render(){
        return(  
        <ReactModal  
            isOpen={this.props.isopen}
            onRequestClose={this.props.handleClose}
            id= {"#modal-promotion-"+this.props.index} 
            className="modal-promotion"
             
        >
        
        <div className="modal-body">
       
        <button  
            title="Close" 
            type="button" 
            class="close" 
            onClick={this.props.handleClose} 
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <section >
            <div>
                <hr></hr>
                <img className="my-2" src={this.props.imagesrc}></img>
            </div>     
        </section>
        </div>
        </ReactModal>
         
        )
    }
}


export default  Modal