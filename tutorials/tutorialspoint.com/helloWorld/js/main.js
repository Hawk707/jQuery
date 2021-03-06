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
	//Interaction
	
	$(function(){
		//Drag-able:
		$("#draggable").draggable();
		//Drop-able:
		$("#droppable").droppable({
			drop: function(event, ui){
				$(this).addClass("ui-state-highlight").find("p").html("Dropped!");
			}
		});
	});
	
	//Interactino: resizable:
         $(function() {
			
            $( "#resizable-14" ).resizable({
				
               create: function( event, ui ) {
                  $("#resizable-15").text ("I'm Created!!");
               },

               resize: function (event, ui) {
                  $("#resizable-16").text ("top = " + ui.position.top +
                     ", left = " + ui.position.left +
                     ", width = " + ui.size.width +
                     ", height = " + ui.size.height);
               }
            });
				
         });
	
	//Interactino: selectable
	$(function(){
		$("#selectable").selectable();
	});

	//Interactino: sortable
	$(function(){
		$("#sortable").sortable();
		$("#sortable").disableSelection();
	});
	
	//accordion
	$( "#accordion" ).accordion();
	
	//Autocomplete
	            var availableTags = [
               "ActionScript",
               "AppleScript",
               "Asp",
               "BASIC",
               "C",
               "C++",
               "Clojure",
               "COBOL",
               "ColdFusion",
               "Erlang",
               "Fortran",
               "Groovy",
               "Haskell",
               "Java",
               "JavaScript",
               "Lisp",
               "Perl",
               "PHP",
               "Python",
               "Ruby",
               "Scala",
               "Scheme"
            ];
				
            $( "#tags" ).autocomplete({
               source: availableTags
            });
	
	//Date Picker
	$( "#datepicker" ).datepicker();
	
	//Dialog
	$( "#dialog" ).dialog();
	
	//Menue
	$( "#menu" ).menu();
	
	//Progress Bar
	$( "#progressbar" ).progressbar({
    value: 37
	});
	
	//Widget Select Menu
         $(function() {
            $( "#speed" ).selectmenu();
            $( "#files" ).selectmenu();
            $( "#number" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
         });
			
	//Slidebar
	$( "#slider" ).slider();
	
	//tabs
         $(function() {
            $( "#tabs" ).tabs();
         });
		 
	//tooltip
         $(function() {
            $( document ).tooltip();
         });
});
