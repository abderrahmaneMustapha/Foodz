import React from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';

import TNavBar from '../../components/transparentnavbar/index'
import SearchBar from '../../components/searchbar/index'
import Card from '../../components/card/index'
import CardPromotions from '../../components/promotionsCard/index'
import Footer from '../../components/footer/index'
class Home extends React.Component {
  
  render(){
    return (
      <>
      <header className="bg-c-white site-header">
          <TNavBar></TNavBar>
        <section className="container-fluid" >
          <div className="row">
              <div className="col-md-6 col-sm-12 curve"> 
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
              <div className="col-md-6">
                <div className="header-img-container">
                    <img className="d-block w-100 hide-mobile" src="https://ceremonycoffee.com/wp-content/uploads/ecommslider3.jpg" />
                </div>
              </div>
          </div>
        </section>
      </header>

      <main>
        <section id="services">
          <div className="container-custome-middle bg-c-grey ">
            <header className="text-center pt-5">
              <h3 className="h3">What we offer</h3>
            </header>
            <div className="row justify-content-center align-items-center m-md-5 p-md-5">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </section>

        <section id="promotions">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-sm-12 intro-container">
                  <div className="container-fluid text-center intro">
                    <header><h2 className="h2">Promotions</h2><br></br></header>
                    <p className="text-muted"> 
                    An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. 
                    He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be
                    <br></br></p>

                    <a className="black-link-c" href="#"> See more of this promotions &gt;&gt; </a>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="w-100">
                    <div className="row">
                    <CardPromotions src="https://foodetective-production.s3.amazonaws.com/uploads/picture/photo/0d039b24-09c4-4e21-82c0-ef9868db029e/tablet_el_perro_salvaje_6184_745x497.jpg"></CardPromotions> 
                    <CardPromotions  src="//cms.chobanifoodservice.com/assets/_squarethumb700/FS_DAksland_May17_CoconutCurry_07_018_200511_145746.jpg" ></CardPromotions>
                    <CardPromotions src="https://foodetective-production.s3.amazonaws.com/uploads/picture/photo/0d039b24-09c4-4e21-82c0-ef9868db029e/tablet_el_perro_salvaje_6184_745x497.jpg"></CardPromotions> 
                    <CardPromotions  src="//cms.chobanifoodservice.com/assets/_squarethumb700/FS_DAksland_May17_CoconutCurry_07_018_200511_145746.jpg" ></CardPromotions>                                    
                    </div>
                  </div>                 
                </div>
              </div>
            </div>
        </section>
      </main>
      <Footer></Footer>
      </>
    );
  }
  
}

export default Home;
