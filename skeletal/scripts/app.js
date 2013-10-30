/*!
* app.js 0.1
*/
(function () {
	var lines, menu; 

	menu = $('#menu-toggle');
	menu.on('click', function (e) {
		$(this).toggleClass('active');

		$('.nav-wrapper').toggle();
	});

	lines = document.getElementsByClassName('details');
	for(var i = 0; i < lines.length; i++) {
		$clamp(lines[i], { clamp: 3 });
  };
}());