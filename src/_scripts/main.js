// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Swiper = require('../_scripts/swiper');

var pressSwiper = new Swiper ('.press-swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1060: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});

var quotesSwiper = new Swiper ('.quotes-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
});

var WOW = require('../_scripts/wow.js').WOW;

$(function() {

  var wow = new WOW(
    {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       -50,          // distance to the element when triggering the animation (default is 0)
	    callback:     function(box) {
      $('.animated').addClass('custom-animated');
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
  );
  wow.init();

});
