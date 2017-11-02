function updateClock(){
	var d=new Date();
	var h,m,s;
	var hour=d.getHours();
	var minute=d.getMinutes();
	var second=d.getSeconds();
	if(hour<=9){
		h="0"+hour;	
	}else{
		h=hour;
	}

	
	if(minute<=9){
		 m="0"+minute;
	}
	else{
		m=minute;
	}
	if(second<=9){
		s="0"+second;
	}else{
		s=second;
	}


	var d=h+":"+m+":"+s;
	$("span").text(d);
	
}


$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});

