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
            let checboxes_names =  ['Open Now', 'Free Delivery', 'Most Visited']
            let items = []
            checboxes_names.forEach(element=>{
                items.push(<CheckBoxes  name="sidebar-checkboxes" text={element} />)
            })

            return items
        }

        // add radio buttons 
        let add_radio = ()=>{
            let radio_names = ['Delivery', 'Pickup', 'Reserve']
            let items = []
            radio_names.forEach(element=>{
                items.push(<ButtonRadio   checked={false} name="sidebar-options"  text={element} id={element} />)
            })
            return items
        }

         // add radio buttons 
        let add_stars = ()=>{
            let radio_names = ['Delivery', 'Pickup', 'Reserve']
            let items = []
            let star = <OneStart />
            for(let i =0; i < 5; i++){
                items.push(
                    <ButtonRadio   
                        checked={false} 
                        name="sidebar-stars"  
                        text={star} 
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
                            <header  id="fitlers-header" className="mb-5 mt-4"> 
                             <h3 className="h3">Filters</h3>
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