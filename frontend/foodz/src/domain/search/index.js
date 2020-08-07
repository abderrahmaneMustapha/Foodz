import React from "react"
import logo from '../../assets/images/logo.svg';
import './search.css'

import WNavBar from '../../components/whitenavbar/index'


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city : 'Tiaret'
        }
    }
    render(){
        return (
            <>
            <header>
                <WNavBar city={this.state.city} />
            </header>
        
            </>
        )
    }
}

export default Search