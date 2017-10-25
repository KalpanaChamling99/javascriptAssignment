$(document).ready(function(){
	$("input").change(function(e){
		e.preventDefault();
		$("span").css("display","inline");
		var value1 = $("#text-field").val();
		$("#text-field-value").html(value1);
	});

	$("input").keyup(function(e){
		e.preventDefault();
		var value = $("#text-field").val();
		$("#text-field-msg").html("<b>"+value+"</b>");
		$("#text-field-msg").css("border-style","groove");
		$("#text-field-msg").css({"padding":"5px","font-size":"12pt"});

	});
	
});