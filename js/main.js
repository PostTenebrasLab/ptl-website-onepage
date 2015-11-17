mobile = false;

$(document).ready(function(){

	
	function checkMobile(){
		if ($(window).width() < 980) {
			mobile = true;
			$('section').css('height','auto');
			$('#blueimp-gallery').removeClass('blueimp-gallery-controls');
			headerSizeMobile();
		} else {
			$('section').css('height',($(window).height()));
			headerSize();
			addressDataBoxHeightPosition()
		};
	};

	function headerSize(){
		$('header').height($(window).height());
		$('#desktop-navigation').css('top', ($(window).height())*60/100);
		$('#address').css('height', ($(window).height())-($('footer').height()));
	};

	function headerSizeMobile(){
		$('header').height($(window).height());
		$('#desktop-navigation').css('top', 0);
		$('#address').css('height', ($(window).height())-($('footer').height()));
	};

	function addressDataPosition(){
		var win = $(window).width();
		var cont = $('.container').width();
		var paddingDate = (win - cont)/2;
		$('#address-data').css('padding-left', paddingDate);
	};

	function addressDataBoxHeightPosition(){
		$('#address-box').css('top', ($('#address').height()-$('#address-box').height())/2 + 'px');
	};



	function slider(){
		$('.slide').each(function(i,e){
			$(e).find('a:not(:first-of-type)').hide();
		});

		setInterval(function(){
			$('.slide').each(function(i,e){
				var current = $(e).find('a:visible');
				if (current.next().length == 0) {
					$(e).find('a:first-of-type').fadeIn('slow');
				}else{
					current.next().fadeIn('slow');
				};
				current.fadeOut('slow');
			});
		},4000);
	}	

	$(window).on('resize', function(){
		checkMobile();
		addressDataPosition();
	});


	$('#menu a').click(function(){
		var position = $($(this).attr('href')).offset();
	    $('html, body').animate({ scrollTop: position.top }, 600);
	    return false;
	});

	
	/* mobile nav */

	$('#my-toggle-button, #mobile-navigation a').on('click', function(){
        $('#mobile-navigation').toggleClass('hidden-menu');
    });

	/*init*/

	
	addressDataPosition();
	checkMobile();
	slider();

	
	$(document).on('scroll', function(){
		
		if (mobile == false) {
			var menuFixed = $('#fixed-desktop-navigation');
			if ($(window).scrollTop() >= $('#about').offset().top){
				  menuFixed.stop().animate({
				    top: "0px"
				  }, 100);
			}else{
				menuFixed.stop().animate({
				    top: "-70px"
				 }, 50);
			}
		};
	});
	

});