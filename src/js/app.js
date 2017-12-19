const $ = window.jQuery
require('zoom.js')
require('./zoom/transition.js')
require('slick-carousel')

$(() => {
  $('#slider').slick({
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }]
  })
})
