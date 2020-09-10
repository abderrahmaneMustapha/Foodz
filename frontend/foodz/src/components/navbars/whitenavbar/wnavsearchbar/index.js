import React from "react"

import './search.css'



class WNavSearch extends React.Component{
  
  
    render(){
        return (
            <form onKeyDown={this.props.handleSearch} id="w-seach-form" >
            <div className="input-group mx-1">
                <div className="input-group-prepend ">
                    <span className="input-group-text" id="basic-addon2">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <input  id="input-search-white-nav" className="form-control " type="search" placeholder={this.props.query} aria-label="Search" /> 
            </div>   
            </form>
        )
    }
}

export default WNavSearch