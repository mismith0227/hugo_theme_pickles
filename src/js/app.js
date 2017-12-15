const $ = window.jQuery
require('zoom.js')
require('./zoom/transition.js')
require('slick-carousel')

$(() => {
  // Add JavaScript Code
  const relatedItemCount = $('.js-related__item').length
  console.log(relatedItemCount)
  if (relatedItemCount < 4) {
    $('#slider').slick('unslick')
  } else {
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
  }
})
