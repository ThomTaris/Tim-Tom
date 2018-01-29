import './scss/index.scss';

$(document).ready(() => {
	$('#fullpage').fullpage({
		continuousHorizontalKey: 'ZWtzY2hlbWEuYmVfVWpLWTI5dWRHbHVkVzkxYzBodmNtbDZiMjUwWVd3PThocg==',
		resetSlidersKey: 'ZWtzY2hlbWEuYmVfMUFoY21WelpYUlRiR2xrWlhKemI3NQ==',
		continuousHorizontal: true,
		resetSliders: true,
		scrollOverflow: true,
		verticalCentered: false,
		controlArrows: true,
		fitToSection: true,
	});

	$( "#product-page-threat-fabric" ).click(() => {
		$.fn.fullpage.moveSlideLeft();
	});

	$( "#product-page-csd" ).click(() => {
		$.fn.fullpage.moveSlideRight();
	});
});

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