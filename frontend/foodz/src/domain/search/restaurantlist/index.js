import React from "react"

import StarRatings from 'react-star-ratings';


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
                        <col id="image-col" span="1"  />
                        <col id="name-col"  span="2" />
                        <col id="rating-col" span="3"  />
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
                            <td className="font-weight-bold">{element.name}<br></br>
                            <p className="text-muted d-sm-none ">
                            img elements must have an alt prop, either with meaningful text, or an empty string for decorative images 
                            </p></td>
                            <td className="text-center">
                            <StarRatings 
                                rating={parseFloat(element.rating)}
                                starRatedColor="blue"
                                numberOfStars={5}
                                name='rating'
                                starDimension="1.5em"
                                starSpacing="1px"
                            ></StarRatings>
                            <br></br> 
                             <span className="text-muted ">{element.total_rating} ratings</span>
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
