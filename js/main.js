$(document).ready(function() {
	// FullPage JS
	$('#pagepiling').pagepiling({
    anchors: ['Home', 'About', 'Resume', 'Services', 'Gallery', 'Clients', 'News', 'Contact', 'Footer'],
    scrollingSpeed: 2000,
    navigation: {
        'textColor': '#000',
        'bulletsColor': '#000',
        'position': 'right',
        'tooltips': ['Home', 'About', 'Resume', 'Services', 'Gallery', 'Clients', 'News', 'Contact', 'Footer']
    }
	});
	// Testimonial Slider JS
	$("#testimonial-slider").owlCarousel({
    items:3,
    itemsDesktop:[1000,2],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768,2],
    itemsMobile:[550,1],
    pagination: true,
    autoPlay:false
  });
});
// Gallery JS
$(window).on("load", function() {
	// Isotope JS
	var $grid = $(".grid").isotope({});
	$('.gallery-listing').on('click', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});
// When we refresh, page goes to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
// Remove URL when we refresh the page JS
history.replaceState(null, null, ' ');
