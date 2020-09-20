import React from "react"
import "./foodmenu.css"
 class foodMenuCard extends React.Component{


    render(){
        return(
            <div className="card col-md-2 col-sm-10 mx-3 shadow">
            <img className="card-img-top " src={this.props.foodimage} alt={this.props.foodname} />
            <div className="card-body">            
                <h5 className="card-title">{this.props.foodname}</h5>
                <p className="card-text">{this.props.foodtext}</p>
                <span className="text-muted">{`${this.props.foodprice} $`} </span>
            </div>
            </div>
        )
    }
 }

 export default foodMenuCard