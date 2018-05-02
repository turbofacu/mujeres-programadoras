// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

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