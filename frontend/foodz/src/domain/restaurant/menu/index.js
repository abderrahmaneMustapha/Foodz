import React from "react"
import "./menu.css"

import FoodCard from '../../../components/cards/foodmenu/index';

import  {fetchRestaurantFoods} from '../../../api/foodsApi/index'


class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            foods :  "",
            loading : true
        }
    }

    componentDidMount(){
        let results = []
        this.props.foods.forEach(url=>{
            fetch(url)
            .then(res => res.json())
            .then(res=>{
                results.push(res)
               this.setState({
                foods : results,
                loading : false
               })
            })
        })
    }
   
    render(){
        
        return(      
            <div id="food-menu" className="container-fluid px-5">

                <header className="mb-4"> 
                    <h2 className="h2 font-weight-bold">Menu</h2>
                </header>


                {this.state.loading===false ? 

                    <div className="row">
                    {
                        this.state.foods.map(element=>(
                            <FoodCard
                            foodimage={element.photo}  
                            foodname={element.name} 
                            foodtext={"some text about the burger"}
                            foodprice={"200$"}
                            /> 
                        ))
                    }                    
                    </div>

                    :<div>loading...</div>
                }


            </div>
        )
    }
}

export default Menu