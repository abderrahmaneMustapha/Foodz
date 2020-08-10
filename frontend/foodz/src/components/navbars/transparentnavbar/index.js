import React from 'react';
import logo from '../../../assets/images/logo.svg';

import './navbar.css'


class TNavBar extends React.Component{
  
  render(){
    return (
      <div className="pos-f-t fixed-top index-5 ">  
           
        <nav className="navbar   navbar-transparent bg-transparent  ">
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-black"></i>
          </button>

          <a className="navbar-brand ml-md-auto " href="#">Logo</a>    

          <ul className="navbar-nav d-flex flex-row ml-md-auto  w-20 ">
            <li className="nav-item mx-3"><a className="nav-link black-link  p-0 " href="#">Login</a></li>
            <li className="nav-item mx-3"><a className="nav-link black-link p-0" href="#">Signup</a></li>
          </ul>
        </nav>
        <div className="collapse w-100" id="navbarToggleExternalContent">
          <div className=" bg-c-white  p-4  vh-100">
            <h5 className="text-dark h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div> 
        
      </div>
      );
    }
  }
   



export default TNavBar;
