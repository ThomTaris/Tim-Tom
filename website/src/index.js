import './scss/index.scss';

$(document).ready(function() {
	$('#fullpage').fullpage({
		continuousHorizontalKey: 'ZWtzY2hlbWEuYmVfVWpLWTI5dWRHbHVkVzkxYzBodmNtbDZiMjUwWVd3PThocg==',
		resetSlidersKey: 'ZWtzY2hlbWEuYmVfMUFoY21WelpYUlRiR2xrWlhKemI3NQ==',
		continuousHorizontal: true,
		resetSliders: true,
		scrollOverflow: true,
		verticalCentered: false,
	});

	$( "#product-page-threat-fabric" ).click(function() {
		$.fn.fullpage.moveSlideLeft();
	});

	$( "#product-page-csd" ).click(function() {
		$.fn.fullpage.moveSlideRight();
	});
});

$( document ).ready(function() {
	let menuExpanded = false;

	$( ".hamburger" ).click(function() {
		menuExpanded = true;
		$( ".menu" ).slideToggle( "fast", setMenuButtonState);
	});

	$( ".cross" ).click(function() {
		menuExpanded = false;
		$( ".menu" ).slideToggle( "fast", setMenuButtonState);
	});

	$(".menu a").click(function() {
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