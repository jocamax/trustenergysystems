import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css'
import {Navigation, EffectFade} from 'swiper'
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


const Slider = () => {
  return (
    <div className='swiper-container'>
        <Swiper
        modules={[Navigation, EffectFade]}
        navigation={true}
        effect
        speed={800}
        slidesPerView={1}
        loop
        className='swiper'
        >
        <SwiperSlide className='swiper-slide'>
            <img src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default Slider