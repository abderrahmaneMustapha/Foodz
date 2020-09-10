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


// a package to get params from a url
import queryString from "query-string"

// redux
import {getRestaurants, getRestaurantsPending, getRestaurantsError, getCity, getQuery} from "../../reducer/Restaurants/restaurantsReducer"
import {getFoods, getFoodsPending, getFoodsError} from "../../reducer/Foods/foodsReducer"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            query : "",
            
        }
        this.handleSearch = this.handleSearch.bind()
        
    }

    componentDidMount(){
        // fetch data from api    
        const {fetchRestaurant, fetchFood} = this.props

        // get current query from url
        let params = queryString.parse(this.props.location.search)
        
        this.setState({
            query:params.query
        })

        this.props.fetchRestaurant(params.query)
        fetchFood()
        fetchRestaurant()    
        
    }

    handleSearch = (event)=>{
        
        if (event.keyCode==13){
            event.preventDefault()
            const parsed = queryString.parse(this.props.location.search);
            parsed.query = document.getElementById("input-search-white-nav").value;
            const stringified = queryString.stringify(parsed);
            this.props.location.search = stringified;
            this.props.history.push(this.props.location)
        }        
    }

    shouldComponentRender() {
        const {pending_food, pending_restaurant} = this.props;
      
        return pending_food && pending_restaurant;
    }


    render(){
        
       
        
        // get fooods & restaurants list from redux store
        const {foods, restaurants} = this.props
        console.log(restaurants)
        if(this.shouldComponentRender()) return <div>aaaa</div>
        return (
            <>
            <header>
                <WNavBar  handleSearch={this.handleSearch} city="Tiaret" query={this.state.query} />
            </header>
            <main className="container-fluid">
                <div className="row">
                    <FilterSideBar />
                    <section id="main-search-result" className="col-md-9 col-sm-12"> 
                        <FoodsList foods={foods} />                                             
                        <RestaurantList restaurants={restaurants} />                  
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

const mapStateToProps = state =>({
    city : getQuery(state.restaurant),
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