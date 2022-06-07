// This gives the effect of a light source on a page 
// example at https://sqedg.com/Portfolio/dynamicShadows.html

var scroll = window.pageYOffset;
var staticLight = 200;
changeLight();
$(document).scroll(function(e) {
	changeLight();
})
function changeLight() {
	var shadowBlur;
	var shadowRGB = "rgba(0, 0, 0, 0.8)";
	var lightSource = window.pageYOffset + staticLight ;
	var x = 0;
	$(".lightSource-shadow").each(function() {
		var shadowOffSet = (this.offsetTop - window.pageYOffset - staticLight) / 35;
		$(this).css("box-shadow","0px "+(shadowOffSet)+"px 7px rgba(0, 0, 0, 0.50)" );
	})
	scroll = window.pageYOffset;
}
