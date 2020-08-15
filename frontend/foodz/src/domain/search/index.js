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
import fetchRestaurant  from "../../api/restaurantApi/index"
import fetchFoods from "../../api/foodsApi/index"


// redux
import {getRestaurants, getRestaurantsPending, getRestaurantsError} from "../../reducer/Restaurants/restaurantsReducer"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city : 'Tiaret',
            foods_list:fetchFoods(),
            
        }
    }

    componentDidMount(){
        // fetch data from api    
        const {fetchRestaurant} = this.props
        fetchRestaurant()
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }


    render(){
        const {restaurants, error, pending} = this.props
        return (
            <>
            <header>
                <WNavBar city={this.state.city} />
            </header>
            <main className="container-fluid">
                <div className="row">
                    <FilterSideBar />
                    <section id="main-search-result" className="col-md-9 col-sm-12">                        
                         <FoodsList foods_list={this.state.foods_list}  />
                         <RestaurantList restaurants_list={this.props.restaurants}/>
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

const mapStateToProps = state =>({
    error : getRestaurantsError(state),
    products : getRestaurants(state),
    pending : getRestaurantsPending(state)
})

const mapDispatchToProps = state =>({
    fetchRestaurant  : fetchRestaurant
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);