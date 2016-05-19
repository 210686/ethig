$( document ).ready(function() {
	$(".bone").show();
	$(".btwo").hide();
	$(".bthree").hide();	
	$(".bfour").hide();
	$(".bfive").hide();
	$(".bsix").hide();
	$(".bseven").hide();
	$(".beight").hide();
	$(".bnine").hide();
	$(".bpanda").hide();

$("#lone").click(function(){
	$(".bone").hide();
	$(".btwo").show();
	$("#exploreBody").css("backgroundImage", "url(https://issl.files.wordpress.com/2009/11/resolution-8_001.png)");
});

$("#lone").click(function(){
	$(".bone").hide();
	$(".btwo").show();
	$("#exploreBody").css("backgroundImage", "url(https://issl.files.wordpress.com/2009/11/resolution-8_001.png)");
});

$("#ltwo").click(function(){
	$(".btwo").hide();
	$(".bthree").show();
	$("#exploreBody").css("backgroundImage", "url(img/pic5.jpg)");
});

$("#rthree").click(function(){
	$(".btwo").show();
	$(".bthree").hide();	
	$("#exploreBody").css("backgroundImage", "url(https://issl.files.wordpress.com/2009/11/resolution-8_001.png)");	
});
//Your jquery goes here

});