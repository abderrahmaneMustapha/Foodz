import React from "react"
import logo from '../../assets/images/logo.svg';
import './search.css'

// outer components
import WNavBar from '../../components/navbars/whitenavbar/index'

// inner components
import FilterSideBar from './filtersidbar/index'
import FoodsList from './foodsList/index'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city : 'Tiaret'
        }
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
                         <FoodsList  />
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

export default Search