$(document).ready(function(){
	
	var counter=1;
	$("#extend").click(function(e){
		e.preventDefault();
		$("#extend-field").append('<div><label>Field '+counter+'</label><input name="textbox' + counter +
        '"  type="text" id="textbox' + counter + '" value=""><a class="add-text-field"><button>+</button></a><a class="remove-extend-field"><button>-</button></a>');
		counter++;


	});

	
	$("#extend-field").on("click",".add-text-field",function(e){
		e.preventDefault();

		$(this).parent().remove();
		$("#extend#extend-field").remove();
		$("#extend-field").append('<div><label>Field '+counter+'</label><input name="textbox' + counter +
        '" type="text" id="textbox' + counter + '" value=""><a class="add-text-field"><button>+</button></a><a class="remove-extend-field"><button>-</button></a>');
				
		counter++;
		
		

	});

	$("#extend-field").on("click",".remove-extend-field",function(e){
		e.preventDefault();
		$(this).parent('div').remove();
	});
	$("#show").click(function(e){
		e.preventDefault();
		var msg = '';
  		for(i=1; i<counter; i++){
      		msg += "\n value of " + i + " input field : " + $('#textbox' + i).val() +"\n";
  		}
        
		alert(msg)	;
		// $(".value").text(msg);


	});
	
});
