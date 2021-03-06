'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.login').hide();
    $('.loading_image').click(fade);
    $('#username').focus(function(){
    	$(this).css('background', '#ffb79b')
    });
    $('#username').blur(function(){
    	$(this).css('background', 'white')
    });
	$('#password').focus(function(){
    	$(this).css('background', '#ffb79b')
    });
    $('#password').blur(function(){
    	$(this).css('background', 'white')
	});

	// Start A/B tracking after animation
	track();
}

function fade(e) {
    e.preventDefault();
	$('.loading_image').fadeOut(1000, function(){
		$('.login').show();
	});
}