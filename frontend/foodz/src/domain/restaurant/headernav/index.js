import React from "react"
import "./nav.css"
class HeaderNav extends React.Component{


    render(){
        return(
            <nav id="profile-header-nav" className="nav border-top border-bottom">
                <a className="nav-link active" href="#">Menu</a>
                <a className="nav-link" href="#">Reviews</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Q&A</a>
            </nav>
        )
    }
}

export default HeaderNav