import React from "react"
import './restaurant.css'

// outer components
import WNavBar from '../../components/navbars/whitenavbar/index'

// inner compenents
import Menu from "./menu/index"
import Photos from "./photos/index"
import Reviews from "./reviews/index"
import ProfileHeaderInfo from "./profileheaderinfo/index"
import HeaderNav from "./headernav/index"

// router 
import { Route} from "react-router-dom";
let cover_src= 'https://drivendata-prod-public.s3.amazonaws.com/images/project-conservation.png'
let photos_list = [{},{}, {}, {}, {}]
class Restaurant extends  React.Component{


    render(){

        return(
            <>
            <header>
                <WNavBar city="Tiaret" />
                <section id="profile-header">
                    <div id="extra-link" className="d-flex flex-row ">
                        <div className="rounded-circle active shadow">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </div>
                        <div className="rounded-circle shadow">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-bookmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z"/>
                            </svg>
                        </div>
                        <div className="rounded-circle  shadow">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.024 3.797L4.499 7.56l-.448-.895 7.525-3.762.448.894zm-.448 9.3L4.051 9.335 4.5 8.44l7.525 3.763-.448.894z"/>
                            <path fill-rule="evenodd" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                            </svg>
                        </div>                        
                    </div>

                    <img id="conver-image" src={cover_src} alt=""></img>
                    
                    <ProfileHeaderInfo/>
                    <HeaderNav />
                </section>

            </header>
            <main>
            <Route strict  path="/restaurants/:name" render = {({match})=>{
                if (window.location.href.includes("?page=Menu")) return <Menu />
                else return null 
            }} >
                
            </Route>
            <Route strict path="/restaurants/:name" render = {({match})=>{
                if (window.location.href.includes("?page=Reviews")) return <Reviews />
                else return null 
            }}>
                
            </Route>
            <Route strict path="/restaurants/:name"  render = {({match})=>{
                if (window.location.href.includes("?page=Photos")) return <Photos photos_list={photos_list} />
                else return null 
            }}  >
                
            </Route>
        
            
            </main>
            </>
        )
    }
}
export default Restaurant