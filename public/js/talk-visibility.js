
$('.talk-button').click(function() {
	var id = $(this).attr('id');
	console.log(id);

	//Check if it's hide or not
	var is_visible = ($('#txt-' + id + ':visible').length);

	if(!is_visible){
		$('#txt-'+ id).css("display","block");
		$('html, body').animate({
			scrollTop: $("#box-"+id).offset().top -100
		}, 900);

	}else{
		$('#txt-'+ id).css("display","propertyName, value, propertyName, function");
	}
});
