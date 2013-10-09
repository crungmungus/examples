(function () {
	var Selector = function (el, options) {
		this.opts = [].slice.apply(options);
		
		this.decorator = this.opts.decorator;

		if(this.opts.ajax) {
			this.ajax = this.opts.ajax;
		}

		el.addEventListener('keyup', function (e) {
			this.keyHandler(e.keyCode);
		});
	};

	Selector.prototype = {		
    isArrow: function (k) {
      return (k > 36 && k < 41);
    },

		query : function (term) {
			var q;

			if(this.ajax) {
				q = $.ajax({
					url : this.ajax.url,
				});
			}
		},

		keyHandler : function (keyCode) {
			if(this.isArrow(keyCode)) {
				if(keyCode === 38) {

				} else if (keyCode === 40) {
					
				}
			}
		},

		result : function (data) {

		}
	};

	// Use Case Example:
	var mySelectBox = new Selector({
		ajax : {
			url : 'http://localhost/autocomplete',
			param : 'q'
		}
	});

	mySelectBox.query('test'); // http://localhost/autocomplete?q=test;
}());