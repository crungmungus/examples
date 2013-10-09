/**
 * Muncher.
 * Chomps on an iterable data source and traverses it quickly for near-proximity results.
 */
(function () {
	var munchkin = {
		init : function (options) {
			this.el = $(options.el);
			
			this.el.on('keyup', $.proxy(function (e) {
				var k = e.which ? e.which : e.keycode;
        		if(k > 36 && k < 41) {
        			$(e.target).blur();
        			this.open();
        		}
			}, this));
		},

		open : function () {
			var results = $('.results');

			results.show();
			results.on('keyup', function (e) {
				console.log(e);
			});
		}
	}

	window.munchkin = munchkin;
}());