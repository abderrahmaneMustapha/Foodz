import React from 'react';

import logo from '../../assets/images/logo.svg';
import './searchbar.css'

// helper
//..

// router
import RedirectToResearch from '../../routes/Searchredirect/index'


class SearchBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            query : this.props.query,
            search_redirect : false
        }
    
        // This binding is necessary to make `this` work in the callback
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){    
        // get citys from ip stack api
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true&key=AIzaSyAQFVDHbMUfKv_fUSNey5h3FWnt5V7TP1o')
        .then(res=> res.json())
        .then((data)=>{
            console.log(data)
        })
    }


    // Handlers 
    handleSearch = (e)=>{
        // please page dont refresh 
        e.preventDefault()
        let search = document.getElementById('search').value || this.state.query
        // allow redirect to search page
        if (search){
            this.setState({ search_redirect : true, query : search})
        }
        
        
    }

    render(){
        if (this.state.search_redirect){
            return <RedirectToResearch query = {this.state.query}></RedirectToResearch>
        }
        return (
            <>
                <form  id="search-form" className="form-inline my-lg-0">
                    <div className="input-group mb-3 w-70 mt-5 border p-3">
                    <div className="input-group-prepend ">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <input 
                        type="text" 
                        name="search"
                        id="search"
                        className="form-control"
                        placeholder={this.state.query}
                        aria-label="Search..." 
                        aria-describedby="basic-addon2" 
                        required={false}
                    
                    />
                    <div >
                        <button onClick={this.handleSearch} type="submit" id="submite-search" className="btn btn-primary" >search</button>
                    </div>
                </div>
                </form>
            </>
        );
    }
  
}



export default SearchBar;
