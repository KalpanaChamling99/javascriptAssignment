$(document).ready(function(){
	
	$("#extend").click(function(e){
		e.preventDefault();
		$("#extend-field").append('<div><input type="text"><a class="add-text-field"><button>+</button></a><a class="remove-extend-field"><button>-</button></a>');
		
	
	});

	
	$("#extend-field").on("click",".add-text-field",function(e){
		e.preventDefault();
		$("#extend-field").append('<div><input type="text"><a class="add-text-field"><button>+</button></a><a class="remove-extend-field"><button>-</button></a>')
		

	});

	$("#extend-field").on("click",".remove-extend-field",function(e){
		e.preventDefault();
		$(this).parent('div').remove();
	});

	
});
