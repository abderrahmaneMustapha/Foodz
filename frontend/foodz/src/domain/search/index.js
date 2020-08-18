import React from "react"
import logo from '../../assets/images/logo.svg';
import './search.css'

// outer components
import WNavBar from '../../components/navbars/whitenavbar/index'

// inner components
import FilterSideBar from './filtersidbar/index'
import FoodsList from './foodsList/index'
import RestaurantList from './restaurantlist/index'

/// api fetchs
import  fetchRestaurantsAction  from "../../api/restaurantApi/index"
import fetchFoodsAction from "../../api/foodsApi/index"


// redux
import {getRestaurants, getRestaurantsPending, getRestaurantsError} from "../../reducer/Restaurants/restaurantsReducer"
import {getFoods, getFoodsPending, getFoodsError} from "../../reducer/Foods/foodsReducer"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchFood from "../../api/foodsApi/index";

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city : 'Tiaret',
            
        }
    }

    componentDidMount(){
        // fetch data from api    
        const {fetchRestaurant, fetchFood} = this.props
        fetchFood()
        fetchRestaurant()
        
        console.log('im fetching fooods',fetchFood())
    }

    shouldComponentRender() {
        const {pending_food, pending_restaurant} = this.props;
      
        return pending_food && pending_restaurant;
    }


    render(){
        const {foods, restaurants, foods_error} = this.props
        
        console.log("this is a restaurant list ",this.props)
        if(this.shouldComponentRender()) return <div>aaaa</div>
        return (
            <>
            <header>
                <WNavBar city={this.state.city} />
            </header>
            <main className="container-fluid">
                <div className="row">
                    <FilterSideBar />
                    <section id="main-search-result" className="col-md-9 col-sm-12"> 
                    <FoodsList foods={foods} />                                             
                    <RestaurantList restaurants={restaurants} ></RestaurantList>                  
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

const mapStateToProps = state =>({
    error_restaurant : getRestaurantsError(state.restaurant),
    restaurants : getRestaurants(state.restaurant),
    pending_restaurant : getRestaurantsPending(state.restaurant),
    foods_error: getFoodsError(state.food),
    foods : getFoods(state.food),
    foods_pending : getFoodsPending(state.food)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRestaurant : fetchRestaurantsAction ,
    fetchFood : fetchFoodsAction
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);