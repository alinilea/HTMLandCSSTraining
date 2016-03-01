$(document).ready(function() {
	$('a:not(".text-muted")').hover(function () {
		$(this).fadeIn('fast', 0.5);
	});

	$('ul.cs_nav li a:not(".text-muted")').on('click', function(event) {
		event.preventDefault(); // prevent the default action
		event.stopPropagation; // stop the click from bubbling
		$(this).closest('ul').find('.active').removeClass('active');
		$(this).parent().addClass('active');
    });
});
