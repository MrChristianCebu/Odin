$(document).ready(function() {
	for (var i = 1; i <= 24; i++) {
		for (var j = 1; j <= 24; j++) {
			$('#container').append('<div class="pixel"></div>')
		};
	}
});

$(document).ready(function() {
  $('#button').click(function() {
    $('div.pixel').css('background-color', '#aaafff')
  });
});

$(document).ready(function() {
  $('div.pixel').hover(function() {
    $(this).css('background-color', 'black');
  });
});
