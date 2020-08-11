import React from "react"
import "./restaurant.css"
class RestaurantList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            restaurants_list:  this.props.restaurants_list
        }
    }

    render(){
        return(
            <div className="table-responsive">
                <table className="table table-hover">
                    <caption>{this.props.title}</caption>
                    <colgroup>
                        <col span="1" style={{width:"25%"}} />
                        <col span="2" style={{width:"55%"}}/>
                        <col span="3" style={{width:"20%"}} />
                    </colgroup>
                    <thead >  
                  
                        <div  id="filter-options-select"   className="my-2 ">
                            <label for="filters-select"></label>
                            <select className="custom-select" id="filters-select">
                            <option value="volvo">New</option>
                            <option value="saab">Old</option>
                            <option value="opel">Best</option>
                            <option value="audi">Worste</option>
                            </select>                                  
                        </div>                    
                                     
                    </thead>
                    <tbody>
                        {this.state.restaurants_list.map(element=>(
                        <tr>
                            <td ><img className="search-restaurant-img" src={element.photo}></img></td>
                            <td className="font-weight-bold">{element.name}</td>
                            <td>{element.rating}<br></br> 
                             <span className="text-muted">{element.total_rating} ratings</span>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
            
        )
    }

}

export default  RestaurantList
