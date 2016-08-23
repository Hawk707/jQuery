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
	
	//DOM Manipulation starts here:
	$("#division").click(function(){
		var content = $(this).html();
		$("#result").text(content);
		$(this).replaceWith("<h1>jQuery is Great</h1>");
	});
	
	$(".divM").click(function(){
		$(this).remove();
	});
	
	$(".divD").click(function(){
		$(this).before('<div class="divD"></div>');
	});
	
	//Events Handling starts here:
	$(".divE").bind('click', function(event){
		alert('Hi there!');
	});
	
	//Ajax
	$("#driver").click(function(event){
		$('#stage').load('/jquery/result.html');
	});
	
	$("#driver1").click(function(event){
				
               $.getJSON('/jquery/result.json', function(jd) {
                  $('#stage1').html('<p> Name: ' + jd.name + '</p>');
                  $('#stage1').append('<p>Age : ' + jd.age+ '</p>');
                  $('#stage1').append('<p> Sex: ' + jd.sex+ '</p>');
               });
					
            });
	$("#driver2").click(function(event){
               var name = $("#name").val();
               $("#stage2").load('/jquery/result.php', {"name":name} );
            });
	
	//Effects
	$("#hide").click(function(event){
		$(".mydivEffect").hide(1000);
	});
	
	$("#show").click(function(event){
		$(".mydivEffect").show(1000);
	});

            $(".clickme").click(function(event){
               $(".target").toggle('slow', function(){
                  $(".log").text('Transition Complete');
               });
            });

});
