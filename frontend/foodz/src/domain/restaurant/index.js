import React from "react"


// outer components
import WNavBar from '../../components/navbars/whitenavbar/index'

class Restaurant extends  React.Component{


    render(){

        return(
            <>
            <header>
                <WNavBar city={this.state.city} />
            </header>
            <div>
                Restaurant page 
            </div>
            </>
        )
    }
}
export default Restaurant