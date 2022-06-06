// This gives the effect of a light source on an html page

var scroll = window.pageYOffset;
var shadowOffSetDiff = 0;
$(document).scroll(function(e) {
	var shadowBlur;
	var shadowRGB = "rgba(0, 0, 0, 0.8)";
	var lightSource = window.pageYOffset - 20;
	shadowOffSetDiff -=1;
	$("body .overlay").css("opacity",window.pageYOffset/600);
	$(".lightSource-shadow").each(function() {
		var hgt = $(this).height();
		var shadowOffSet = (this.offsetTop - (lightSource ) ) / 35;
		if (shadowOffSet > -2 && shadowOffSet < 2){
			$(this).css("box-shadow","0px "+(shadowOffSet)+"px 8px rgba(0, 0, 0, 0.50)" );
		}
		else {
			$(this).css("box-shadow","0px "+(shadowOffSet)+"px 7px rgba(0, 0, 0, 0.51)" );
			//rgb(23,21,0)
		}
	})
	scroll = window.pageYOffset;
})
