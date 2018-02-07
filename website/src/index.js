import './scss/index.scss';

// fullpage initialization
$(document).ready(() => {
	const headerTitleMap = [];
	headerTitleMap['sfylabs-main'] = '';
	headerTitleMap['sfylabs-services'] = 'our services';
	headerTitleMap['threat-fabric'] = 'threatfabric';
	headerTitleMap['csd'] = 'csd';
	headerTitleMap['sfylabs-contact'] = 'contact';
	headerTitleMap['sfylabs-partners'] = 'partners';

	$('#fullpage').fullpage({
		continuousHorizontalKey: 'ZWtzY2hlbWEuYmVfVWpLWTI5dWRHbHVkVzkxYzBodmNtbDZiMjUwWVd3PThocg==',
		resetSlidersKey: 'ZWtzY2hlbWEuYmVfMUFoY21WelpYUlRiR2xrWlhKemI3NQ==',
		continuousHorizontal: true,
		resetSliders: true,
		scrollOverflow: true,
		scrollOverflowEndPrevent: { delay: 500, reversal: false },
		verticalCentered: false,
		controlArrows: false,
		fitToSection: true,
		scrollOverflowOptions: {
			click:false,
			preventDefaultException: {tagName: /.*/}
		},
		afterLoad: function(anchorLink, index){
			if (anchorLink) {
				$('.header-title').text(headerTitleMap[anchorLink]);
			}

			if (index === 2) {
				const loadedSection = $(this);
				const scrollableSlides = loadedSection.find('.fp-scrollable');
				//console.log()
				for (let i = 1; i < scrollableSlides.length; i++) {
					const IScroll = $(scrollableSlides[i]).data('iscrollInstance');
					setTimeout(() => IScroll.scrollTo(0, 0, 0));

				}
			}

		},
		afterSlideLoad: function( anchorLink, index, slideAnchor){
			if (anchorLink) {
				$('.header-title').text(headerTitleMap[slideAnchor]);
			}
		}
	});



	$( ".product-page-threat-fabric-link" ).click(() => {
		$.fn.fullpage.moveSlideLeft();
	});

	$( ".product-page-csd-link" ).click(() => {
		$.fn.fullpage.moveSlideRight();
	});

	$('.back-to-services').click(() => {
		$.fn.fullpage.moveTo(3, 0);
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