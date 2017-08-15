const $ = window.jQuery
require('zoom.js')
require('./zoom/transition.js')

$(() => {
  $('#js-article img').attr('data-action', 'zoom')
})
