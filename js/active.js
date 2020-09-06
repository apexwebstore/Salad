(function ($) {
    'use strict';
	$(document).ready(function() {
		$('.headerAd2 a.singleDemo, .headerAd2 a.demoLink').magnificPopup({type: 'image'});


	        $(window).scroll(function () {
	            if($(this).scrollTop() > 150) {
	                $('.scrlTop').fadeIn();
	            } else {
	                $('.scrlTop').fadeOut();
	            }
	        });

	        //Click event to scroll to top
	        $('.scrlTop').click(function () {
	            $('html, body').animate({
	                scrollTop: 0
	            }, 800);
	            return false;
				$.preventDefault();
	        });
            $('.counter').counterUp({
                time: 1500
            });

            $('.nav').onePageNav({
                currentClass: 'current'
            });

			$(function() {
			  $('a.homeBtn.demo').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: target.offset().top
					}, 1000);
					return false;
				  }
				}
			  });
			});
		
            var heaH = $('header').height();

            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 600) {
                    $('header').addClass('sticky');
                    $('.homeArea').css('marginTop', heaH );
                } else {
                    $('header').removeClass('sticky');
                    $('.homeArea').css('marginTop', 0 );
                }
            });
		$(window).load(function(){
			var headPhone = $('.responsiveImg').height();
			$('.responsiveContent').height(headPhone);
		});
	});


})(jQuery);
