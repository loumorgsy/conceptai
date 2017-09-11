$(function(){

	$('.menu_icon').on('click', function(){
		$(this).find('svg').toggleClass('active');
		$('.shown').toggleClass('active');

	});

});