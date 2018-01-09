window.onload = function() {
	
	
	///     menu mobile
	
	var humb = $(".hamburger-box");
	
	$("#menu").click(function () {
		$("#ul").animate({'right': 0}, 300);
		
		//hamburger animation
		
		humb.addClass('hamb-anim');
	});
	$('#ul').click(function (e) {
		e.stopPropagation();
		$("#ul").animate({'right': '-100%'}, 300);
		
		//hamburger animation
		
		humb.removeClass('hamb-anim');
		
	});
	$("#menu ul li a").click(function () {
		$("#ul").animate({'right': '-100%'}, 300);
		
		//hamburger animation
		
		humb.removeClass('hamb-anim');
	});
	
	
	///surprise popup

	var timeoutSurprise = window.setTimeout(popupSurprise, 5000);

	function popupSurprise () {
		var s = $('promo_popup');
		s.addClass('surprise__show');
		s.onclick = function (e) {
			if (e.target !== document.getElementsByClassName('link')) {
				this.removeClass('surprise__show');
			}
		}
	}

	// carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
		center: true,
        navText : ["❮","❯"],
		dots: true
    })
    $('.owl-products').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        center: true,
        navText : ["❮","❯"],
    })
};
