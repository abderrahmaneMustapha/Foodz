import React from "react"
import './search.css'

class WNavSearch extends React.Component{
    render(){
        return (
            <form id="w-seach-form" >
            <div className="input-group mx-1">
                <div className="input-group-prepend ">
                    <span className="input-group-text" id="basic-addon2">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <input className="form-control " type="search" placeholder="Search" aria-label="Search" /> 
            </div>   
            </form>
        )
    }
}

export default WNavSearch