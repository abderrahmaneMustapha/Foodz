import React from "react"
import CheckBoxes from "../../../components/inputs/checkboxes/index"
import ButtonRadio from '../../../components/inputs/buttonradio/index'
import OneStart from '../../../components/stars/onestart/index'
class FilterSideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    // hide filter sidebar
    handleFiltersClose = ()=>{
        let filterbar_classlist = document.getElementById("sidebar-filter").firstChild.classList
        // check if the filter sidebar is not already hidden
        if (!filterbar_classlist.contains("hide-sm")){
            filterbar_classlist.add("hide-sm")
        }
        
    }

    

    render(){
        
        // add check boxes 
        let add_checkboxes = ()=>{
            let checboxes_names =  [{name: "open-now" , text:'Open Now'}, {name:'free-delivery', text:'Free Delivery'}]
            let items = []
            checboxes_names.forEach(element=>{
                items.push(<CheckBoxes  handle_filters={this.props.handle_filters}
                name={element.name} text={element.text} />)
            })

            return items
        }

        // add radio buttons 
        let add_radio = ()=>{

            let radio_names = [
                {name: 'delivery' ,text:'Delivery'}, 
                {name:'pickup', text:'Pickup'},
                {name:'reserve', text:'Reserve'}
            ]

            let items = []
            radio_names.forEach(element=>{
                items.push(<ButtonRadio 
                classname= "radio-button-filter"  
                handle_filters={this.props.handle_filters} 
                checked={false}
                  name={element.name}  
                 text={element.text} 
                 id={element.name} />)
            }) 
            return items
        }

         // add radio buttons 
        let add_stars = ()=>{
            let items = []
            let star = <OneStart />
            for(let i =0; i < 5; i++){
                items.push(
                    <ButtonRadio   
                        checked={false} 
                        name="sidebar-stars"
                        classname= "radio-button-rating"  
                        handle_filters={this.props.handle_filters} 
                        text={star} 
                        data = {i+1}
                        id={"stars"+i}
                        style="px-3"
                    />
                )
            }
    
            return items
        }

      
        return(
            <aside  id="sidebar-filter" className="col-md-3 col-sm-10 ">
                        <div className="container hide-sm">
                            <div onClick={this.handleFiltersClose} className="col-12 close mt-2 ">
                                <i className="fas fa-times float-right"></i>
                            </div>
                            <header  id="fitlers-header" className="mb-5 mt-4 "> 
                                <h3 className="h3">Filters</h3>
                                <button 
                                    onClick={this.props.handle_reset_filters} 
                                    className="btn btn-primary">Reset
                                </button>
                            </header>
                            <div id="deliver-pick-reserve" className="my-5">
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    {add_radio()}
                                </div>
                            </div>

                            <div id="features" className="my-5">
                                <header id="features-header mb-2">
                                    <h5 className="h5">Features</h5>
                                </header>
                                {add_checkboxes()}
                            </div>

                            <div id="rating" className="my-5">
                                <header id="features-header mb-2">
                                    <h5 className="h5">Rating</h5>
                                </header>
                                <div className="btn-group btn-group-toggle"  data-toggle="buttons">
                                    {add_stars()}
                                </div>
                            </div>
                           
                        </div>
            </aside>
        )
    }
}

export default FilterSideBar