$(document).ready(function(e){
	$("#v").on("change",function(e){
		e.preventDefault();
		var values=$(this).val();
		$('.dropdown-content').css("display","block");
		$(".extend").append('&nbsp;<button id="'+values+'" class="country">'+values+'&nbsp;&nbsp;<i class="fa fa-times"></i>'+'</button>');
		$('option[value=' +values + ']').attr("disabled","disabled");

	});
	$("#v").on("click",".dropdown-list",function(e){
		e.preventDefault();
		$(".extend").append('&nbsp;<button id="'+values+'" class="country">'+values+'&nbsp;&nbsp;<i class="fa fa-times"></i>'+'</button>');
		$('option[value=' +values + ']').attr("disabled","disabled");
	});	
	$(".extend").on("click",".country",function(e){
		e.preventDefault();
		var id=$(this).attr('id');
		$(this).css("display","none");
		$('#v').find('#'+id).removeAttr("disabled");

	});
});


        