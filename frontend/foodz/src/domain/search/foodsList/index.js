import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

class FoodList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            foods_list : []
        }
    }

    render(){
        return(
            <div id="foods-list">
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            
            
          </Swiper>
          </div>
        )
    }
}


 export default FoodList