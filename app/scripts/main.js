



$('.share').click(function(){
	$(this).css('height', '200px', 'width', '625px');
});




$('.sharebutton').bind("mouseenter mouseleave",function(){
	$(this).toggleClass('buttonshadow');
});