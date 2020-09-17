import React from "react"
import "./nav.css"
import {ListItemLink} from  '../../../utilities/ListLink/index'
class HeaderNav extends React.Component{


    render(){
        return(
            <nav id="profile-header-nav" className="nav border-top border-bottom">
                <ListItemLink to="?page=Menu" exact>Menu</ListItemLink>
                <ListItemLink  to="?page=Reviews" exact >Reviews</ListItemLink>
                <ListItemLink  to="?page=Photos" exact>Photos</ListItemLink>
            </nav>
        )
    }
}

export default HeaderNav