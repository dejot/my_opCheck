// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$('.kurzdiagSave').click(function() {
	/* Act on the event */
	console.log('hallo Darko');
	$('#panel2b').parent().addClass('active');
	$('#panel2b').addClass('active');
	$('#panel1b').removeClass('active');
	$('#panel1b').parent().removeClass('active');
});

$('.demogSave').click(function() {
	/* Act on the event */
	console.log('hallo Darko');
	$('#panel3b').parent().addClass('active');
	$('#panel3b').addClass('active');
	$('#panel2b').removeClass('active');
	$('#panel2b').parent().removeClass('active');
});