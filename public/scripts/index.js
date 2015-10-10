$( document ).ready(function() {
	$('img.svg').each(function (){
		var $image = $(this);
		var imgURL = $image.attr('src');
		
		$.get(imgURL, function (data){
			$svgTag = $(data).find('svg');
			$image.replaceWith($svgTag);
		},'xml');
	});
});