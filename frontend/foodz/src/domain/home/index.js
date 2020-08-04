import React from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';

import NavBar from '../../components/navbar/index'
import SearchBar from '../../components/searchbar/index'
import Card from '../../components/card/index'
class Home extends React.Component {
  
  render(){
    return (
      <>
      <header className="bg-c-white site-header">
          <NavBar></NavBar>
        <section className="container-fluid" >
          <div className="row">
              <div className="col-6 curve"> 
              <div className="container-fluid">
                <header className="site-intro">
                  <span className="site-intro-font-1">Cool</span><span className="site-intro-font-2">Foodz</span>
                  <div className="text-muted w-75">
                    lipsum as it is sometimes known, is dummy text used in laying out print, 
                    graphic or web designs. The passage is attributed to an unknown typesetter in the 15th 
                  </div>
                  <SearchBar></SearchBar>
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

      <main>
        <section id="services">
          <div class="container-custome-middle bg-c-grey ">
            <header class="text-center pt-5">
              <h3 class="h3">What we offer</h3>
            </header>
            <div class="row justify-content-center align-items-center m-5 p-5">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </section>
      </main>
      </>
    );
  }
  
}

export default Home;
