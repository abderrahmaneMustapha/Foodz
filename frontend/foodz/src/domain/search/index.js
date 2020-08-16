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
        if( pending == false) return false;
        // more tests
        return true;
    }


    render(){
        const {restaurants, error, pending} = this.props
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
                    <RestaurantList restaurants={restaurants} ></RestaurantList>
                         
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

const mapStateToProps = state =>({
    error : getRestaurantsError(state),
    restaurants : getRestaurants(state),
    pending : getRestaurantsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRestaurant : fetchRestaurantsAction 
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);