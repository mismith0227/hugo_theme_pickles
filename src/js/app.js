import Zooming from 'zooming'
const $ = window.jQuery
require('slick-carousel')

$(() => {
  const zooming = new Zooming({
    scaleBase: 0.5
  })

  zooming.listen('.img-zoomable')

  $('#slider').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  })
})
