import './scss/index.scss';

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