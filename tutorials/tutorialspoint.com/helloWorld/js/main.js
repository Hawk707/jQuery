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
	
	//$("#myimg").attr("src", "images/jquery.jpg");
	
	$("em").addClass("selected");
	$("#myid").addClass("highlight");
	
	//Traversing starts here:
	$("li").eq(2).addClass("selected");
	$("li").filter(".middle").addClass("selected");
	$("p").find("span").addClass("selected");
	
	//CSS Selectors starts here:
	$("#1").css("color", "red");
	$("#myul").find("li").eq(3).css({"color":"red", "background-color":"green"});
	$("#div1").width(100);
	$("#div1").css("background-color", "blue");
});
