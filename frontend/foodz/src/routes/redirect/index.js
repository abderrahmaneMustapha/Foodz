import React from "react"
import { Switch, Route} from "react-router-dom";
import { Redirect } from 'react-router'


class RedirectToResearch extends React.Component {
 
    render(){

        return <Redirect to='/search' />

                  
    }
    


};

export default RedirectToResearch
