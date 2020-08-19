import React from "react"
import './restaurant.css'

import StarRatings from 'react-star-ratings';
// outer components
import WNavBar from '../../components/navbars/whitenavbar/index'
import Menu from "./menu/index"


let cover_src= 'https://drivendata-prod-public.s3.amazonaws.com/images/project-conservation.png'
let profile_src = 'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=hwwp88BW_cYAX-zZpa_&_nc_ht=scontent-mrs2-1.xx&oh=3ded93f2ca4a9ce8a3ea2ceaebd0be58&oe=5F5F9917'
class Restaurant extends  React.Component{


    render(){

        return(
            <>
            <header>
                <WNavBar city="Tiaret" />
                <section id="profile-header">
                <div id="extra-link" className="d-flex flex-row ">
                        <div className="rounded-circle shadow">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </div>
                        <div className="rounded-circle shadow">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bookmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z"/>
                            </svg>
                        </div>
                        <div className="rounded-circle shadow">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.024 3.797L4.499 7.56l-.448-.895 7.525-3.762.448.894zm-.448 9.3L4.051 9.335 4.5 8.44l7.525 3.763-.448.894z"/>
                            <path fill-rule="evenodd" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                            </svg>
                        </div>
                        
                    </div>
                <img id="conver-image" src={cover_src} alt=""></img>
                    
                    <div id="profile-header-info" >                
                        <img className="rounded-circle" id="profile-image" src={profile_src}></img>
                        <div className="mx-md-2">
                            <div className="d-flex flex-row align-items-center">
                                <h4> Restaurant 1</h4> 
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-circle-fill ml-1" fill="#3859DE" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </div>
                            
                            <div className=" d-flex flex-wrap justify-content-between align-items-center">
                                <div className="d-flex align-items-center" >
                                    <StarRatings 
                                        rating={parseFloat(4)}
                                        starRatedColor="#FFBF00"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="1.3em"
                                        starSpacing="1px"
                                    ></StarRatings>
                                    <span className="text-muted pt-1 ml-1"> 222 ratings</span>                                    
                                </div>

                                <div className="">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="#01F802" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    </svg>
                                    <span className="font-weight-bold ml-md-2 ml-sm-0" >open now</span>
                                </div>

                               
                                <div id="profile-contact" className="d-flex flex-wrap ">
                                    <span className="font-weight-bold" >website  : </span> <a href="http://abderrahmane-mustapha.codes/" target="_blank">abderrahmane-mustapha.codes</a>
                                    <span className="ml-md-5  font-weight-bold">phone number : </span> <a href="#">+213988999889</a>
                                </div>
                                

                            </div>
                            
                        </div>                        
                    </div>
                </section>
            </header>
            <main>
            <Menu />
            </main>
            </>
        )
    }
}
export default Restaurant