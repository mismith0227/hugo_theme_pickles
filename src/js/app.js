import Zooming from 'zooming'
import Swiper, { Navigation } from 'swiper'
// import Swiper styles
import 'swiper/swiper-bundle.css'
Swiper.use([Navigation])

document.addEventListener('DOMContentLoaded', () => {
  const zooming = new Zooming({
    scaleBase: 0.5
  })

  zooming.listen('.img-zoomable')

  // eslint-disable-next-line
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.related-next',
      prevEl: '.related-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  })
})
