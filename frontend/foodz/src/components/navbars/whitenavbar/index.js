import React from "react"
import './navbar.css'

import  WNavSearch from "./wnavsearchbar/index"

class WNavBar extends React.Component {
    
    render(){
        return (
            <nav id="white-navbar" className="navbar  navbar-expand-lg navbar-white bg-white "> 
                 
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerWhiteSearch" aria-controls="navbarTogglerWhiteSearch" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-black"></i>
                </button>                               
                <div className=" blue-link-c mx-2 mb-1">
                            <i className="fas fa-map-marker-alt mx-md-1"></i>
                            {this.props.city}
                </div>  
                <div className="collapse navbar-collapse " id="navbarTogglerWhiteSearch">

                      
                        <WNavSearch city={this.props.city} ></WNavSearch> 
                
                </div>

                <a className="navbar-brand ml-md-auto " href="/">Logo</a>
                             
            </nav>
        )
    }

}

export default WNavBar