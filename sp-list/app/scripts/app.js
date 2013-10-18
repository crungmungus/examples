define(function (require) {
	return {
		meta : {
			version : '0.1a'
		},

		initialize : function (func) {
			func.apply(this);
		},

		expose : function (namespace, obj) {
			if(!this[namespace]) {
				this[namespace] = obj;
			}
		}
	};
});