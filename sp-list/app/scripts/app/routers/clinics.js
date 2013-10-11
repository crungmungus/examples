define(function (require) {
  var Presenter = require('presenters/ClinicPresenter'),
      View = require('views/ClinicListView'),
      Form = require('views/ClinicFormView'),
      Collection = require('collections/ClinicCollection');

  return Backbone.SubRoute.extend({
    initialize: function () {
      new Presenter({
        view : new View(),
        form : new Form(),
        collection : new Collection()
      });
    }
  });
});
