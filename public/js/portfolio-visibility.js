//Change visibility in portfolio
$('.activities').click(function() {
	var id = $(this).attr('id');
	//Selected element visible
	var elem_visible = ($('#activities-' + id + ':visible').length);
	//Any element visible
	var any_visible = ($('.selected-activity:visible').length);

	if(!elem_visible){
		//Check if any element is visible and hide it
		if(any_visible){
			$(".selected-activity").css("display","none");
			$(".text-activities").css("display","none");
		}
		$('#selected-item').load('/public/txt/talks/talk_1.txt',function(){
			//Display selected element
			$('#selected-item').css('display','block');
			$('#activities-' + id).css('display','block');
			$('#txt-' + id).css('display','block');

			$('html, body').animate({
				scrollTop: $("#activity-list").offset().top
			}, 1500);
		});
	}
});

