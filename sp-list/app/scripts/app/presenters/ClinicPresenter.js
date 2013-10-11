/**
 * Supervising Presenter.
 */
define(function (require) {
  return Marionette.Controller.extend({
		initialize : function (opts) {
			this.view = opts.view;
			this.form = opts.form;
			this.collection = opts.collection;

			console.log(this);
		}
  });
});