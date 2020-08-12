import React from "react"
import { Redirect } from 'react-router'


class RedirectToResearch extends React.Component {
 
    render(){

        return <Redirect to={{ pathname : '/search', search: "?query="+this.props.query }} />

                  
    }
    


};

export default RedirectToResearch
