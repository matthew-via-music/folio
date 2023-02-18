import { A11y, Keyboard, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import data from '../data'

import "swiper/css"
import "swiper/css/navigation"
// import "swiper/css/pagination"
// import "swiper/css/scrollbar"
import "../css/carousel.css"

export default function Carousel() {
  
  return (
    <div className="swiper-outer">
    <Swiper
      // direction={"vertical"}
      tag="section"
      wrapperTag="ul"
      modules={[A11y, Keyboard, Autoplay]}
      slidesPerView={1}
      keyboard
      loop
      // autoplay
      // navigation
    >
      <div>
        {data.map((obj) => (
          <SwiperSlide
            tag="li"
            // style={{ width: "100vw", height: "95vh" }}
            key={obj.id}
          >
          
          <div className="visit"><a href={obj.url} target="_blank"><span>Visit Site</span></a></div>
          
          <div className="layout">
            <a href={obj.repoUrl} target="_blank">
              <p className="z-10 absolute border-t-[2px] border-[#ffcd56] w-fit text-center mx-16 mt-6 text-[10px] text-[#c9cbcf] p-2">&rarr;{obj.cta}&larr;</p>
              <p className="z-10 absolute bg-[#ffcd56] w-fit text-center mx-12 text-[12px] text-black p-1 mt-1">{obj.language}</p>
            </a>

            <img className="z-2 slide-img" src={obj.img} alt="Matthew Via Music" />

          </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>

    <div onClick={() => alert("Swipe left and right or use keyboard arrows")} className="swiper-button-prev"><span>&larr;</span></div>
    <div onClick={() => alert("Swipe left and right or use keyboard arrows")} className="swiper-button-next"><span>&rarr;</span></div> 
    </div>
  )
}
