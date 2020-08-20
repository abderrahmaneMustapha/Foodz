import React from 'react'

import StarRatings from 'react-star-ratings';

import './profileheader.css'
let profile_src = 'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=hwwp88BW_cYAX-zZpa_&_nc_ht=scontent-mrs2-1.xx&oh=3ded93f2ca4a9ce8a3ea2ceaebd0be58&oe=5F5F9917'

class ProfileHeaderInfo extends React.Component{

    render(){
        return(
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
        )
    }
}

export default ProfileHeaderInfo