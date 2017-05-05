$(function() {
	$('.selectpicker').change(function() {
		if (+$(this).val())
			$(this).parent().addClass("active");
		else 
			$(this).parent().removeClass("active");
	});

	$('.btn-activity').click(function() {
		var it = $(this);
		if (it.hasClass('btn-danger')) {
			it.removeClass('btn-danger').addClass('btn-success').find('span').text('Добавлена в траекторию');
		} else {
			it.removeClass('btn-success').addClass('btn-danger').find('span').text('Добавить в траекторию');
		}
	});
});