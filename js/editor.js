$(function() {
	$('.slideshow-container').dacSlideshow({
		btnPrev : '.slideshow-prev',
		btnNext : '.slideshow-next',
		btnPause : '.pauseButton'
	});

	$('[data-type="AdArea"]').hover(function() {
		$(this).find('[data-type="AdImage"]:first').css("visibility", "visible");
	}, function() {
		$(this).find('[data-type="AdImage"]:first').css("visibility", "hidden");
	});

	var editors = $('#strContent').PSEditor({
		getImgUrl : 'testjson2'
	});
	
	$("#getdata").click(function(){
		console.log(JSON.stringify(editors.Get(0)));
		console.log(JSON.stringify(editors.GetAll()));
	});
});

