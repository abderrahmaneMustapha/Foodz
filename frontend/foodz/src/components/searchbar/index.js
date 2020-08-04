import React from 'react';
import logo from '../../assets/images/logo.svg';
import './searchbar.css'
import addJs from '../../utilities/addStatic/addJs.js'

class SearchBar extends React.Component {
    componentDidMount(){
        addJs('/searchbar.js')
      }
    render(){
        return (
            <>
                <form  id="search-form" className="form-inline my-lg-0">
                <div className="input-group mb-3 w-75 mt-5 border p-3">
                    <div className="input-group-prepend ">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2"/>
                    <div >
                        <button className="btn btn-primary">search</button>
                    </div>
                </div>
                </form>
            </>
        );
    }
  
}



export default SearchBar;
