$(document).ready(function(){
	//document.write("Hello, World");
	$("div").click(function(){
		alert("Hello, world!");
		});
		
	//Selectors starts here
	$("p").css("background-color", "yellow");
	//multiple selectors
	$(".myclass, #myid").css("background-color", "green");
	
	
	//attributes starts here:
	var title = $("em").attr("title");
	$("#divid").text(title);
	
	$("#myimg").attr("src", "images/jquery.jpg");
	
	$("em").addClass("selected");
	$("#myid").addClass("highlight");
});
