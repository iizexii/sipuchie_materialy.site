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

	$(document).mouseup(function (e) {
		var div = $(".header-burger.active");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.header-burger, .header-menu__wrapper, .overlay').removeClass('active');
			$('body').removeClass('noscroll');
		}
	});

	//форма
	/*let form = $('body .footer__form');
	let formBtn = $('body .footer__form-btn');

	$(document).on('click', formBtn, formSend);
	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		//let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('sending');
			// let response = await fetch('sendmail.php', {
			// 	method: 'POST',
			// 	body: formData
			// });
			// if (response.ok) {
			// 	let result = await response.json();
			// 	alert(result.message);
			// 	formPreview.innerHTML = '';
			// 	form.reset();
			// } else {
			// 	alert('ошибка');
			// }
		} else {
			//alert('заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = $('input[required]');
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];

			formRemoveError(input);
			if (input.value === '') {
				console.log(error);
				formAddError(input);
				error++;
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}*/
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

