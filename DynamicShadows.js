// This gives the effect of a light source on a page 
// example at https://sqedg.com/JuliasPortfolio/DynamicShadows/

var staticLight = 200; // light source distance from top
changeLight();
$(document).scroll(function(e) {
	changeLight();
})
function changeLight() {
	var shadowBlur;
	var shadowRGB = "rgba(0, 0, 0, 0.8)";
	var lightSource = window.pageYOffset + staticLight ;
	$(".lightSource-shadow").each(function() {
		var shadowOffSet = (this.offsetTop - window.pageYOffset - staticLight) / 35;
		$(this).css("box-shadow","0px "+(shadowOffSet)+"px 7px rgba(0, 0, 0, 0.50)" );
	})
}
