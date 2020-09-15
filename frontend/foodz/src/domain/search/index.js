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


// helpers 
import {addFiltersToUrl,getFiltersFromUrl,resetFilters} from "../../utilities/filterAndOrder/index"
class Search extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            query : "",
            ordering : "",
            filters : []
            
        }
        this.handleSearch = this.handleSearch.bind()
        this.handleFilters = this.handleFilters.bind()
        
    }

    componentDidMount(){
        // fetch data from api    
        const {fetchRestaurant, fetchFood} = this.props

        // get current query from url
        let params = queryString.parse(this.props.location.search)
        // full query from url
        let search = getFiltersFromUrl(params)
        this.props.fetchRestaurant(search)

        this.setState({
            query:params.query
    
        })
        
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

             // full query from url
            let search = getFiltersFromUrl(parsed)
            this.props.fetchRestaurant(search)
            this.setState({
                query:search.query
            })
           
        }        
    }

    handleFilters = (event )=>{  
        let parsed  = addFiltersToUrl(this.props, event)
        let search = getFiltersFromUrl(parsed)
        this.props.fetchRestaurant(search)
    }

    handleResetFilters = ()=>{
        resetFilters(this.props)
        this.props.fetchRestaurant('')
    }
    shouldComponentRender() {
        const {pending_food, pending_restaurant} = this.props;
      
        return pending_food && pending_restaurant;
    }


    render(){
              
        // get fooods & restaurants list from redux store
        const {foods, restaurants} = this.props

        if(this.shouldComponentRender()) return <div>aaaa</div>
        return (
            <>
            <header>
                <WNavBar  handle_search={this.handleSearch} city="Tiaret" query={this.state.query} />
            </header>
            <main className="container-fluid">
                <div className="row">
                    <FilterSideBar 
                        handle_reset_filters={this.handleResetFilters} 
                        handle_filters={this.handleFilters}                             
                    />
                    <section id="main-search-result" className="col-md-9 col-sm-12"> 
                        <FoodsList handle_filters={this.handleFilters}  foods={foods} />                                             
                        <RestaurantList  handle_filters={this.handleFilters} restaurants={restaurants} />                  
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