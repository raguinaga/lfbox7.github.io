(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

       $('#myCard').on('click',function(){
  $('.card').css({
      "z-index": "9999",
      "width": "100%",
      "height": "100%", 
      "position": "absolute",
      "top": "0",
      "left": "0"});
    });
  
    $(document).ready(function() {
        $(".menu-icon").on("click", function() {
              $("nav ul").toggleClass("showing");
        });
    });
    
    // Scrolling Effect
    
    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('black');
        }
    
        else {
              $('nav').removeClass('black');
        }
    })  

    
})(jQuery);