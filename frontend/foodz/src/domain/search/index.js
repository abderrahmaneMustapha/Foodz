import React from "react"
import logo from '../../assets/images/logo.svg';
import './search.css'

// outer components
import WNavBar from '../../components/navbars/whitenavbar/index'

// inner components
import FilterSideBar from './filtersidbar/index'
import FoodsList from './foodsList/index'


let foods =  [{
    title: "Food1",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}, {
    title: "Food2",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food3",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food4",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}]

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city : 'Tiaret',
            foods_list : foods
            
        }
    }

    componentDidMount(){
        // fetch data from api
        this.setState({foods_list : foods})
    }


    render(){
        return (
            <>
            <header>
                <WNavBar city={this.state.city} />
            </header>
            <main className="container-fluid">
                <div className="row">
                    <FilterSideBar />
                    <section id="main-search-result" className="col-md-9 col-sm-12">                        
                         <FoodsList foods_list={this.state.foods_list}  />
                    </section>
                </div>
            </main>        
            </>
        )
    }
}

export default Search