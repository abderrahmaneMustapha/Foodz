import React from "react"

import StarRatings from 'react-star-ratings';

import { Link } from 'react-router-dom';

import "./restaurant.css"
class RestaurantList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            restaurants_list:  this.props.restaurants_list
        }
    }

    // show filter sidebar
    handleFiltersShow = (e)=>{
        document.getElementById("sidebar-filter").firstChild.classList.remove("hide-sm")
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
                    <thead class="w-100">  
                        <div  className="d-flex flex-row justify-content-between  align-items-center">
                            <div   id="filter-options-select"   className="my-2 ">
                                <label for="filters-select"></label>
                                <select className="custom-select" id="filters-select">
                                <option value="volvo">New</option>
                                <option value="saab">Old</option>
                                <option value="opel">Best</option>
                                <option value="audi">Worste</option>
                                </select>                                  
                            </div>  
                            <div  id="filter-show" onClick={this.handleFiltersShow}  className="ml-5 hide-lg" span="3">
                                <i class="fas fa-filter"></i> 
                                filter
                            </div>
                        </div>
                                         
                                     
                    </thead>
                    <tbody>
                        {this.state.restaurants_list.map(element=>(
                        
                        
                        
                        <Link  class="link-tr" to={`restaurant/${element.name}`}>
                        
                            <td ><img className="search-restaurant-img" src={element.photo}></img></td>
                            <td className="font-weight-bold">{element.name}<br></br>
                            <p className="text-muted d-sm-none ">
                            img elements must have an alt prop, either with meaningful text, or an empty string for decorative images 
                            </p></td>
                            <td className="text-center">
                            <StarRatings 
                                rating={parseFloat(element.rating)}
                                starRatedColor="#FFBF00"
                                numberOfStars={5}
                                name='rating'
                                starDimension="1.5em"
                                starSpacing="1px"
                            ></StarRatings>
                            <br></br> 
                             <span className="text-muted ">{element.total_rating} ratings</span>
                            </td>
                        </Link>
                    
                        
                        
                        ))}
                        
                    </tbody>
                </table>
            </div>
            
        )
    }

}

export default  RestaurantList
