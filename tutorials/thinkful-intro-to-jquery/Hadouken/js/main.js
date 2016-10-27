//https://www.thinkful.com/learn/intro-to-jquery/
$(document).ready(function() {
	//Adding Ryu at a Stand Still
    $('#my-div').html('<img src="http://i.imgur.com/90Mmdcm.png">')
	//Adding our Animated Ryu
    $('#my-div img').hover(function() {
        this.src = 'http://i.imgur.com/nTj3Fxx.gif'
    }, function() {
        this.src = 'http://i.imgur.com/90Mmdcm.png'
    })
	//The Hadouken Pose
    $('#my-div img').mousedown(function() {
        this.src = 'http://i.imgur.com/Rfj0a80.png'
    })
	//Removing The Hadouken (fire) before adding new one (to avoid odd behavior when click very fast multiple times
    $('#my-div img').mousedown(function() {
        $('.demo-hadouken').remove();
    })
	//Adding The Hadouken (fire)
    $('#my-div img').mousedown(function() {
        $('#my-div').append(
            '<img class="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif">'
        );
    })
	//Animating The Hadouken
    $('#my-div img').mousedown(function() {
        $('.demo-hadouken').animate({
            "margin-left": "600px"
        }, 1000, 'swing', function() {
            this.remove();
        })
    })
	//Getting Ryu Out of The Hadouken Pose
    $('#my-div img').mouseup(function() {
        this.src = 'http://i.imgur.com/90Mmdcm.png'
    })
});