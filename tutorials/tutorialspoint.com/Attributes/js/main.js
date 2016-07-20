$(document).ready(function(){
	//document.write("Hello, World");
	$("div").click(function(){
		alert("Hello, world!");
		});
		
	//Selectors starts here
	$("p").css("background-color", "yellow");
	//multiple selectors
	$(".myclass, #myid").css("background-color", "green");
});
