import React from "react"
import ReactModal from 'react-modal';
import  './modal.css'
import { Link } from "react-router-dom"
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
        <section className="cotainer-fluid">        
                <hr></hr>
                { this.props.title ?
                // if there is a title , this mean if the modal will show a title and 
                // a description 
                <div className="row ">
                    <div className="col-md-5 col-sm-12 ">
                        <img className="px-1 mb-3" src={this.props.imagesrc}></img>
                    </div>
                    <div className="col-md-7 col-sm-12 center-v">
                        <header><h3 className="h3 ">{this.props.title}</h3></header>
                        <div>
                            <p className="text-muted">
                            {this.props.details}
                            </p>
                            <Link className="btn btn-success" to={`/restaurants/${this.props.slug}?page=Menu`} >Visite restaurant</Link>
                        </div>
                    </div>
                </div> : 

                // if the modal will only show a one image
                <img className="my-2 px-1" src={this.props.imagesrc}></img>
                }
        </section>
        </div>
        </ReactModal>
         
        )
    }
}


export default  Modal