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
            <div class="container-fluid">
              <header className="site-intro">
                <span className="site-intro-font-1">Cool</span><span className="site-intro-font-2">Foodz</span>
                <div className="text-muted w-75">
                , or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th 
                </div>
              </header>
            </div>
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
