import React from "react"
import "./nav.css"
import {ListItemLink} from  '../../../utilities/ListLink/index'
class HeaderNav extends React.Component{


    render(){
        return(
            <nav id="profile-header-nav" className="nav border-top border-bottom">
                <ListItemLink to="?page=Menu" >Menu</ListItemLink>
                <ListItemLink  to="?page=Reviews" >Reviews</ListItemLink>
                <ListItemLink  to="?page=Photos" >Photos</ListItemLink>
                <ListItemLink to="?page=qa"  >Q&A</ListItemLink>
            </nav>
        )
    }
}

export default HeaderNav