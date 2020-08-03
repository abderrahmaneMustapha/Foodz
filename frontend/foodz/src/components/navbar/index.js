import React from 'react';
import logo from '../../assets/images/logo.svg';
import './navbar.css'


function NavBar(){
    return (
        <div className="pos-f-t fixed-top ">  
             
          <nav className="navbar   navbar-transparent bg-transparent  ">
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars text-black"></i>
            </button>

            <a class="navbar-brand ml-auto" href="#">Logo</a>    

            <ul class="navbar-nav d-flex flex-row  ml-auto ">
              <li class="nav-item mx-3"><a class="nav-link text-black p-0 " href="#">Login</a></li>
              <li class="nav-item mx-3"><a class="nav-link text-black p-0" href="#">Signup</a></li>
            </ul>
          </nav>
          <div className="collapse w-75" id="navbarToggleExternalContent">
            <div className="bg-dark p-4  vh-100">
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div> 
          
        </div>
    );
}



export default NavBar;
