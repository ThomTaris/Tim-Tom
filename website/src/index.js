import './scss/index.scss';

// fullpage initialization
$(document).ready(() => {
	$('#fullpage').fullpage({
		continuousHorizontalKey: 'ZWtzY2hlbWEuYmVfVWpLWTI5dWRHbHVkVzkxYzBodmNtbDZiMjUwWVd3PThocg==',
		resetSlidersKey: 'ZWtzY2hlbWEuYmVfMUFoY21WelpYUlRiR2xrWlhKemI3NQ==',
		continuousHorizontal: true,
		resetSliders: true,
		scrollOverflow: true,
		verticalCentered: false,
		controlArrows: false,
		fitToSection: true,
		scrollOverflowOptions: {
			click:false,
			preventDefaultException: {tagName: /.*/}
		}
	});

	$( ".product-page-threat-fabric-link" ).click(() => {
		$.fn.fullpage.moveSlideLeft();
	});

	$( ".product-page-csd-link" ).click(() => {
		$.fn.fullpage.moveSlideRight();
	});
});

// menu initialization
$( document ).ready(() => {
	let menuExpanded = false;

	$( ".hamburger" ).click(() => {
		menuExpanded = true;
		$( ".menu" ).slideToggle( "fast", setMenuButtonState);
	});

	$( ".cross" ).click(() => {
		menuExpanded = false;
		$( ".menu" ).slideToggle( "fast", setMenuButtonState);
	});

	$(".menu a").click(() => {
		menuExpanded = false;
		$( ".menu" ).slideToggle( "fast", setMenuButtonState);
	});

	function setMenuButtonState() {
		if (menuExpanded) {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		} else {
			$( ".hamburger" ).show();
			$( ".cross" ).hide();
		}
	}
});


// form initialization
$(function () {

	$('#requestDemoForm').on('submit',function(e) {
		e.preventDefault();

		const name = $('input#name').val();
		const email = $('input#email').val();
		const company = $('input#company').val();
		const message = $('textarea#message').val();
		const whitepaperChecked = $('input#whitepaper').prop('checked');

		console.log({name, email, company, message, whitepaperChecked});

		if (!name || !email || !company ) {
			alert('Please fill out all required fields.');
			return;
		}

		const captcha = grecaptcha.getResponse();
		if (!grecaptcha.getResponse()) {
			alert('Please fill the captcha');
		}

		// $.ajax({
		// 	url: './request.html',
		// 	type: 'POST',
		// 	contentType: 'application/json; charset=UTF-8',
		// 	data: JSON.stringify({
		// 		name: name,
		// 		email: email,
		// 		company: company,
		// 		whitepaper: whitepaperChecked,
		// 		message: message,
		// 		captcha: captcha
		// 	}),
		// 	cache: false,
		// 	success: function () {
		// 		alert('Your request has been submitted');
		// 		$('#requestDemoForm').trigger('reset');
		// 		grecaptcha.reset();
		// 	},
		// 	error: function () {
		// 		alert('Something went wrong, try again later');
		// 	}
		// });

	});
});