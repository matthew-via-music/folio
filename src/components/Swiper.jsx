import { A11y, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperButtons from "./SwiperButtons"
import data from '../data'
import "swiper/css"

export default function Carousel() {
  
  return (
    <div>
    <Swiper
      // direction={"vertical"}
      tag="section"
      wrapperTag="ul"
      modules={[A11y, Keyboard]}
      slidesPerView={1}
      keyboard
      loop
    >
      <div>
        {data.map((obj) => (
          <SwiperSlide
            tag="li"
            // style={{ width: "100vw", height: "95vh" }}
            key={obj.id}
          >
        
        {/* VISIT SITE */}
        <div className="absolute z-20 m-auto top-[20px] right-[20px] font-mono flex flex-col text-center">
          <a href={obj.url} target="_blank">
            <p className="rotate-[-6deg] bg-[#f33] -mb-1 -ml-2 py-1 text-md text-white">Visit Site</p>
            <p className="bg-[#bf4] px-1 pb-0 text-sm text-black">click <span className="text-2xl leading-tight">&uarr;</span> here</p>
          </a>
        </div>

      {/* LANGUAGE + REPO LINK */}
      <div>
        <a href={obj.repoUrl} target="_blank">
          <p className="z-20 absolute bg-[#f7f71d] w-fit text-center text-[12px] font-bold text-black p-2 top-4 left-8 mr-2">{obj.language}</p>
          <p className="rotate-[-3deg] z-10 absolute bg-[#f7f71d] w-fit text-center top-14 left-2 text-black leading-tight text-[11px] p-1">&rarr;{obj.cta}&larr;</p>
        </a>

      {/* IMAGE SLIDES */}
      <picture>
        <source
          media="(max-width: 599px)"
          srcSet={`${obj.imgxs} 599w`}
          sizes="599px"
        />
        <source
          media="(max-width: 999px)"
          srcSet={`${obj.imgsm} 999w`}
          sizes="999px"
        />
        <source
          media="(min-width: 1599px)"
          srcSet={`${obj.imglg} 1599w`}
          sizes="1599px"
        />
        <img className="z-2 opacity-[0.85] w-screen h-screen object-cover object-position-[30%, 110%]" src={obj.imgmd} />
      </picture>

        </div>{/* */}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>

   
      {/* <SwiperButtons /> */}
   

    </div>
  )
}
