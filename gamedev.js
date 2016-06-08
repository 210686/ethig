$( document ).ready(function() {
	$(".bone").show();
	$(".btwo").hide();
	$(".bthree").hide();	
	$(".bfour").hide();
	$(".bfive").hide();
	$("#ufive").hide();
	$(".bsix").hide();
	$(".ending").hide();
	$("#hone").hide();
	$("#eone").hide();
	$("#key").hide();
	$("#etwo").hide();
	$("#hammer").hide();

var point = 0;
var ham = 0;

$("#lone").click(function(){
	$(".bone").hide();
	$(".btwo").show();
	$("#hone").show();	
	$("#exploreBody").css("backgroundImage", "url(img/pic2.png)");
});

$("#rone").click(function(){
	$(".bone").hide();
	$(".bfour").show();
	if (ham == 0) {
	$("#hammer").show();
}
	$("#exploreBody").css("backgroundImage", "url(img/pic4.jpg)");
});

$("#ltwo").click(function(){
	$(".btwo").hide();
	$(".bthree").show();
	$("#exploreBody").css("backgroundImage", "url(img/pic3.jpg)");
});

$("#rtwo").click(function(){
	$(".btwo").hide();
	$(".bone").show();
	$("#exploreBody").css("backgroundImage", "url(img/pic1.jpg)");
});

$("#lthree").click(function(){
	$(".bfour").show();
	if (ham == 0) {
	$("#hammer").show();
}
	$(".bthree").hide();	
	$("#exploreBody").css("backgroundImage", "url(img/pic4.jpg)");	
});

$("#rthree").click(function(){
	$(".btwo").show();
	$(".bthree").hide();
	$("#hone").show();	
	$("#exploreBody").css("backgroundImage", "url(img/pic2.png)");	
}); 

$("#lfour").click(function(){
	$(".bone").show();
	$(".bfour").hide();
	$("#etwo").hide();	
	$("#exploreBody").css("backgroundImage", "url(img/pic1.jpg)");	
}); 

$("#rfour").click(function(){
	$(".bthree").show();
	$(".bfour").hide();	
	$("#etwo").hide();
	$("#exploreBody").css("backgroundImage", "url(img/pic3.jpg)");	
}); 

$("#utwo").click(function(){
	$(".bfive").show();
	$("#puzfive").show();
	$(".btwo").hide();	
	$("#exploreBody").css("backgroundImage", "url(img/pic5.jpg)");	
});

$("#dfive").click(function(){
	$(".btwo").show();
	$(".bfive").hide();	
	$("#ufive").hide();
	$("#hone").show();
	$("#exploreBody").css("backgroundImage", "url(img/pic2.png)");
});

$("#puzfive").click(function(){
	$("#ufive").show();	
});

$("#ufive").click(function(){
	$(".bsix").show();
	$(".bfive").hide();	
	$("#ufive").hide();
	$("#exploreBody").css("backgroundImage", "url(img/pic6.png)");
});

$("#usix").click(function(){
	$(".bsix").hide();	
	$("#giveup").hide();
	$(".hennano").show();
	$("#exploreBody").css("backgroundImage", "url(img/start.png)");
});


$("#dsix").click(function(){
	$(".bsix").hide();
	$(".bfive").show();	
	$("#exploreBody").css("backgroundImage", "url(img/pic5.jpg)");
});

$("#puzsix").click(function(){
	point++
	if (point < 5) {
		alert("What is this?")
	}
	else {
		alert("Something opened");
	}
});

 $("#eone").click(function(){
 if (point > 4) {
    $(".bthree").hide();	
	$("#giveup").hide();
	$(".forest").show();
}
else {
	alert("It doesn't open")
}
});

$("#hammer").click(function(){
	ham++
	$("#etwo").show();
	alert("Something opened")	
});

$("#etwo").click(function(){
	$("#etwo").hide();
	$(".bfour").hide();
	$(".snow").show();
	$("#giveup").hide();
});

});
