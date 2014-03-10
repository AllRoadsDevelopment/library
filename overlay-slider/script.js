/*
	File Name: Box Overlay Slider
	Description: Overlay slides over the box on hover
	Author: Bilal Hassan
	Version: 1.0
	License: GPL V2
*/
(function($){
	$(document).ready(function() {
		$(".box").hover(
			function(){
				$(".box-desc",this).stop(true, false).animate({"height":"100%"},400,function(){
					$("h4",this).fadeIn(500);
				});
			},
			function(){
				$("h4",this).fadeOut(500);
				$(".box-desc",this).stop(true, false).animate({"height":"50px"},400);
        });a
	});	
})(jQuery);