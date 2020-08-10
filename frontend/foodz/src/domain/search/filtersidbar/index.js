import React from "react"
import CheckBoxes from "../../../components/checkboxes/index"
import ButtonRadio from '../../../components/buttonradio/index'
import OneStart from '../../../components/stars/onestart/index'
class FilterSideBar extends React.Component{


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
            <aside  id="sidebar-filter" className="col-md-3">
                        <div className="container">
                            <header  id="fitlers-header" class="mb-5 mt-4"> 
                             <h3 class="h3">Filters</h3>
                            </header>
                            <div id="deliver-pick-reserve" className="my-5">
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    {add_radio()}
                                </div>
                            </div>

                            <div id="features" className="my-5">
                                <header id="features-header mb-2">
                                    <h5 class="h5">Features</h5>
                                </header>
                                {add_checkboxes()}
                            </div>

                            <div id="rating" className="my-5">
                                <header id="features-header mb-2">
                                    <h5 class="h5">Rating</h5>
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