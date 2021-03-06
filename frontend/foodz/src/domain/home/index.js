import React from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';

// components
import TNavBar from '../../components/navbars/transparentnavbar/index'
import SearchBar from '../../components/searchbar/index'
import Card from '../../components/cards/card/index'
import CardPromotions from '../../components/cards/promotionsCard/index'
import Footer from '../../components/footer/index'

// helper
//...
let image_src = "https://foodetective-production.s3.amazonaws.com/uploads/picture/photo/0d039b24-09c4-4e21-82c0-ef9868db029e/tablet_el_perro_salvaje_6184_745x497.jpg"
let details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl lectus, vulputate sed iaculis in, fermentum sed ante. Morbi blandit varius ipsum vel vestibulum. Quisque laoreet ipsum ut urna accumsan, ut tristique magna feugiat. Nulla tristique dignissim augue et convallis. Quisque at ultrices ligula, at ornare elit. Integer eu condimentum sem"
class Home extends React.Component {
  

    // Handlers 
    handleSearch = (e)=>{
        // please page dont refresh 
        e.preventDefault()

        // allow redirect to search page
        this.setState({ search_redirect : true})
        
    }
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
                  <SearchBar query="Tiaret" />
                    
                  
                </header>

              </div>
              </div>
              <div className="col-md-6 ">
                <div className="header-img-container">
                    <img className=" d-block" src="https://ceremonycoffee.com/wp-content/uploads/ecommslider3.jpg" />
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
                <header className="col-md-4 col-sm-12 intro-container">
                  <div className="container-fluid text-center intro">
                    <header><h2 className="h2">Promotions</h2></header>
                    <p className="text-muted"> 
                    An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. 
                    He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be
                    <br></br></p>

                    <a className="black-link-c" href="#"> See more of this promotions &gt;&gt; </a>
                  </div>
                </header>
                <div className="col-md-8 col-sm-12">
                  <div className="w-100">
                    <div className="row justify-content-center">
                    <CardPromotions 
                      show_text={true} 
                      md="col-md-6" 
                      sm="col-sm-12" 
                      src={image_src}
                      title ="Food"
                      details = {details}
                      slug="restaurant-1"
                    />
                    <CardPromotions   show_text={true} 
                      md="col-md-6" 
                      sm="col-sm-12" 
                      src={image_src}
                      title ="Food"
                      details = {details}
                      slug="restaurant-1" />
                    <CardPromotions  
                      show_text={true} 
                      md="col-md-6" 
                      sm="col-sm-12" 
                      src={image_src}
                      title ="Food"
                      details = {details} 
                      slug="restaurant-1"
                      /> 
                    <CardPromotions   
                      show_text={true} 
                      md="col-md-6" 
                      sm="col-sm-12" 
                      src={image_src}
                      title ="Food"
                      details = {details}
                      slug="restaurant-1" />                                    
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
