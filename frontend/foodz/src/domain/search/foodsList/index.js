import React from "react"

import "./list.css"

// import componets 
import FoodCircle from "../../../components/circles/foodcircle/index"

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class FoodList extends React.Component{
    constructor(props){
        super(props)
        
    }

    

    render(){
        
        return(
            <div  id="foods-list">
                <Swiper
                spaceBetween={15}
                slidesPerView={"auto"}
                navigation
                CSSWidthAndHeight= {true}
                pagination={{ clickable: true }}
             
                onSwiper={(swiper) => console.log("")}
                onSlideChange={() => console.log('slide change')}
                >
               
                    {this.props.foods.map(
                        (element)=>(
                            <SwiperSlide>
                            <FoodCircle photo={element.photo}  />
                                <div className="text-muted my-2">{element.title}</div>
                            </SwiperSlide>
                            )
                        )
                    }
     
                </Swiper>
          </div>
        )
    }
}


 export default FoodList