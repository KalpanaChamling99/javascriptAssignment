$(document).ready(function(e){
	$(".toggle-menu").hover(function(e){
		e.preventDefault();
		$(this).css("cursor","pointer");
	});
	
	$(".toggle-menu").on("click",(function(e){
		e.preventDefault();
		$(".list-groups").toggle("slide");
		$(".sidebar").toggle("slide");
	}));
	
	$("dt").on("click",function(e){
		e.preventDefault();
		$(this).nextUntil("dt").slideToggle();
	});
	
	$('dt').on("click",function(e){
		e.preventDefault();
		$('dt').css("background","#263238");
		$('dd').css("background","#263238");
		$(this).css("background","#9E9E9E");
	});
	
	$('dd').on("click",function(e){
		e.preventDefault();
		$('dt').css("background","#263238");
		$('dd').css("background","#263238");
		$(this).css("background","#9E9E9E");
	});
});