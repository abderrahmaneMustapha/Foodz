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
import fetchReastarant  from "../../api/restaurantApi/index"




class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city : 'Tiaret',
            foods_list : foods,
            restaurants_list : restaurants
            
        }
    }

    componentDidMount(){
        // fetch data from api
        this.setState({foods_list : foods})
        this.setState({restaurants_list : fetchReastarant})
    }


    render(){
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
                         <RestaurantList restaurants_list={this.state.restaurants_list}/>
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

export default Search