import React from "react"
import "./menu.css"

import FoodCard from '../../../components/cards/foodmenu/index';

let src = 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg'
class Menu extends React.Component{
    componentDidMount (){
        
    }
    render(){
      
        return(        
            
            <div id="food-menu" className="container-fluid p-5">
                <header className="mb-5 mt-2"> 
                    <h2 className="h2 font-weight-bold">Menu</h2>
                </header>
                <div className="row mt-5">
                    <FoodCard
                        foodimage={src}  
                        foodname={"Burger"} 
                        foodtext={"some text about the burger"}
                        foodprice={"200$"}
                    />
                </div>
            </div>
         
        )
    }
}

export default Menu