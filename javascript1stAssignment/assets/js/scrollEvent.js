$(document).ready(function(){
	$(".scroll-content").scroll(function(e) {
		e.preventDefault();
		var height = $(this).scrollTop();		
		$(".scroll-content-msg").text(height);
			if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        		alert('end');
    		}
	});
});