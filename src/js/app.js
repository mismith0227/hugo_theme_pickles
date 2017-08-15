const $ = window.jQuery
require('zoom.js')
require('./zoom/transition.js')

$(() => {
  $('img').attr('data-action', 'zoom')
})
