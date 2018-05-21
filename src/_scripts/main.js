// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Swiper = require('../_scripts/swiper');

var pressSwiper = new Swiper ('.press-swiper', {
  slidesPerView: 3,
  spaceBetween: 48,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    1060: {
      slidesPerView: 2,
      spaceBetween: 12
    },
  },
  navigation: {
    nextEl: '.press-arrow-next',
    prevEl: '.press-arrow-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

var quotesSwiper = new Swiper ('.quotes-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.quotes-arrow-next',
    prevEl: '.quotes-arrow-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
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

$(document).ready(function(){
  var headerOffset = $('.list-icons-section').offset().top;
  $(document).on('scroll', function() {
    if($(window).scrollTop() > headerOffset) {
      $('.header').addClass('show');
    } else {
      $('.header').removeClass('show');
    }
  });
  $('.header-menu').on('click tap', function(){
    $('.nav').toggleClass('show');
  });
  $('.counter').counterUp();
});