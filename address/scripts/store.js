/**
 */
app.factory('store', function () {
	return {
		get: function () {
			return JSON.parse(localStorage.getItem('contacts') || '[]');
		},

		set: function (contacts) {
			localStorage.setItem('contacts', JSON.stringify(contacts));
		}
	};
});