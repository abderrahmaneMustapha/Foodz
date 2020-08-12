import React from "react"
import { Redirect } from 'react-router'

class RestaurantRedirect extends React.Component {
    

    render(){
        return <Redirect to={{ pathname : '/restaurant', search: "?name="+this.props.name }} />

    }
}

export default RestaurantRedirect