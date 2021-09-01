$(document).ready(function () {
	$("body #header").load("header.html");
	$("body #footer").load("footer.html");

	$('.main-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 500,
		infinite: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		dots: true,
		dotsClass: "slick-dots",
		arrows: true,
		prevArrow: '<span class="slick-prev"><img src="img/chevron-right_grey_grey.svg" alt="prev"></span>',
		nextArrow: '<span class="slick-next"><img src="img/chevron-right_grey_grey.svg" alt="next"></span>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					dots: true
				}
			},
		]
	});

	$('body').on('click', 'input[type="tel"]', function () {
		$(this).mask("(999) 999-99-99");
	});

	$("body").on("click", ".footer__go-top-icon", function (e) {
		e.preventDefault();
		$('body,html').animate({ scrollTop: 0 }, 400);
	});

	$('body').on('click', '.nav', function () {
		$(this).toggleClass('nav_active');
	});

	$(document).on('click', '.header-burger', function () {
		$('.header-burger, .header-menu__wrapper, .overlay').toggleClass('active');
		$('body').toggleClass('noscroll');
	});
});

$(window).scroll(function () {
	var offset = $('body .header').outerHeight();
	var menuHeight = $('body .header-menu').innerHeight();
	if ($(this).scrollTop() >= offset) {
		$('body .wrapper').css('padding-top', menuHeight);
		$('body .header-menu').addClass("sticky");
	} else {
		$('body .wrapper').css('padding-top', '');
		$('body .header-menu').removeClass("sticky");
	}
});