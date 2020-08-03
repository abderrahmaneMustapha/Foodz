import React from 'react';
import logo from '../../assets/images/logo.svg';
import './searchbar.css'


function SearchBar(){
    return (
        <div class="search-wrapper ">
        <div class="input-holder ">
            <input type="text " class="search-input " placeholder="Type to search " />
            <button class="search-icon " onclick="searchToggle(this, event); ">
                <span></span>
            </button>
        </div>
        <span class="close " onclick="searchToggle(this, event); "></span>
    </div>
    );
}



export default SearchBa;
