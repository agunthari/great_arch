$(function() {
	$("#scroll_depeche").jCarouselLite( {
		vertical: true,
		hoverPause: true,
		pauseOnHover: true,
		visible: 3,
		auto:500,
		speed:2000
	} );
});

function cutString(s, n){
	var cut= s.indexOf(' ', n);
	if(cut== -1) return s;
	return s.substring(0, cut)+" [...]";
}

$(function(){

	$('.bxslider').bxSlider({
		pagerCustom: '.bx-pager',
		mode: 'fade',
		auto: true,
		captions: true,
		pagerSelector: '.sliderpager'
	});

	var imgSlide = "";
	$('.bxslider').find('div > img').each( function(index) {

		$("#t_"+($(this).attr("id"))).attr("src", $(this).attr('src') );
	});

	oldZoomTitre1 = $('.bxslider div:nth-child(1) div.bx-caption p.zoom_txt span.zoom_titre a').text();
	newZoomTitre1 = cutString(oldZoomTitre1,75);
	oldZoomTitre2 = $('.bxslider div:nth-child(2) div.bx-caption p.zoom_txt span.zoom_titre a').text();
	newZoomTitre2 = cutString(oldZoomTitre2,75);
	oldZoomTitre3 = $('.bxslider div:nth-child(3) div.bx-caption p.zoom_txt span.zoom_titre a').text();
	newZoomTitre3 = cutString(oldZoomTitre3,75);
	oldZoomTitre4 = $('.bxslider div:nth-child(4) div.bx-caption p.zoom_txt span.zoom_titre a').text();
	newZoomTitre4 = cutString(oldZoomTitre4,75);
	
	$('.bxslider div:nth-child(1) div.bx-caption p.zoom_txt span.zoom_titre a').text(newZoomTitre1);
	$('.bxslider div:nth-child(2) div.bx-caption p.zoom_txt span.zoom_titre a').text(newZoomTitre2);
	$('.bxslider div:nth-child(3) div.bx-caption p.zoom_txt span.zoom_titre a').text(newZoomTitre3);
	$('.bxslider div:nth-child(4) div.bx-caption p.zoom_txt span.zoom_titre a').text(newZoomTitre4);
	
	oldZoomChapo1 = $('.bxslider div:nth-child(1) div.bx-caption p.zoom_txt span.zoom_chapo a').text();
	newZoomChapo1 = cutString(oldZoomChapo1,75);
	oldZoomChapo2 = $('.bxslider div:nth-child(2) div.bx-caption p.zoom_txt span.zoom_chapo a').text();
	newZoomChapo2 = cutString(oldZoomChapo2,75);
	oldZoomChapo3 = $('.bxslider div:nth-child(3) div.bx-caption p.zoom_txt span.zoom_chapo a').text();
	newZoomChapo3 = cutString(oldZoomChapo3,75);
	oldZoomChapo4 = $('.bxslider div:nth-child(4) div.bx-caption p.zoom_txt span.zoom_chapo a').text();
	newZoomChapo4 = cutString(oldZoomChapo4,75);
	
	$('.bxslider div:nth-child(1) div.bx-caption p.zoom_txt span.zoom_chapo a').text(newZoomChapo1);
	$('.bxslider div:nth-child(2) div.bx-caption p.zoom_txt span.zoom_chapo a').text(newZoomChapo2);
	$('.bxslider div:nth-child(3) div.bx-caption p.zoom_txt span.zoom_chapo a').text(newZoomChapo3);
	$('.bxslider div:nth-child(4) div.bx-caption p.zoom_txt span.zoom_chapo a').text(newZoomChapo4);
	
	$('.bx-caption br').remove();

});