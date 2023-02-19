import "swiper/css/navigation"
import "../css/swiper-buttons.css"

function SwiperButtons() {
  return (
    <>
    <div onClick={() => alert("Swipe left and right or use keyboard arrows")} className="swiper-button-prev"><span>&larr;</span></div>
    <div onClick={() => alert("Swipe left and right or use keyboard arrows")} className="swiper-button-next"><span>&rarr;</span></div> 
    </>
  )
}

export default SwiperButtons
