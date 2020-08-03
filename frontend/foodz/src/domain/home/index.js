import React from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';
import NavBar from '../../components/navbar/index'
function Home() {
  return (
    <header className="bg-c-white">
        <NavBar></NavBar>
      <section className="container-fluid" >
        <div className="row">
            <div className="col-6 curve"> 
              <header className="site-intro">
                <span>Cool</span>
                <span>Foodz</span>
              </header>
            </div>
            <div className="col-6">
              <div className="header-img-container">
                  <img className="d-block w-100" src="https://ceremonycoffee.com/wp-content/uploads/ecommslider3.jpg" />
              </div>
            </div>
        </div>
      </section>
    </header>
  );
}

export default Home;
