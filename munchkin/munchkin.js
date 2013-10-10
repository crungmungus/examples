/**
 * My little munchkin.
 * A 'munchkin' is a computed value.
 */
(function () {
	var Munchkin = function (opts) {
		return {
			set : function (f, val) {
				if(vectors.hasOwnProperty(f)) {
					f = val;
				}
			}, 

			get : function () {
				if(opts.mutator) {
					return opts.mutator.apply(this, [].slice.call(opts.vectors));
				}
			}
		}
	}
	
	var m = new Munchkin({
		vectors : {
			a : 1, 
			b : 2
		}, 
		mutator : function (a, b)	{
			console.log(arguments);
			console.log('a: ' + a + ' b: ' + b);
		}
	});

	console.log(m);
	m.get();
}());