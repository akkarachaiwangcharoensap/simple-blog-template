$(document).ready(function() {

	var isActive = true;

	// Toggle the left navigation when the toggleable bar is clicked.
	$('#toggleable-bar').click(function (e) {

		e.preventDefault();
		
		if (isActive == true) {
			// Hide the left navigation
			$('.left-navigation').removeClass('active');
			$('.left-navigation').addClass('inactive');

			// Expand the main body
			$('.main-body').removeClass('not-expanded');
			$('.main-body').addClass('expanded');

		} else {
			// Show the left navigation
			$('.left-navigation').removeClass('inactive');
			$('.left-navigation').addClass('active');

			// Shrink the main body
			$('.main-body').removeClass('expanded');
			$('.main-body').addClass('not-expanded');
		}

		isActive = !isActive;
		
	});
});