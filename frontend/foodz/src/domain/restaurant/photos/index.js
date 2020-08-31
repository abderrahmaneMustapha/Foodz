import React from "react"
import "./photos.css"

import Card from "../../../components/cards/promotionsCard/index"
let image_src = "https://foodetective-production.s3.amazonaws.com/uploads/picture/photo/0d039b24-09c4-4e21-82c0-ef9868db029e/tablet_el_perro_salvaje_6184_745x497.jpg"
class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            photos_list : this.props.photos_list
        }
    }
    render(){
        return(
            <div id="photos-list" className="container-fluid px-5">
                <header className="mb-4"> 
                    <h2 className="h2 font-weight-bold">Restaurants Photos</h2>
                </header>
                <div className="row justify-content-center">
                    {this.state.photos_list.map(element =>(
                    <Card
                        show_text={false} 
                        md="col-md-4" 
                        sm="col-sm-12" 
                        key={element.id} 
                        index={element.id} 
                        src={image_src} 
                    />
                    ))}
                </div>                
            </div>
            
           
        )
    }
}

export default Photos