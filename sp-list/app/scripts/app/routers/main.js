define(['routers/clinics'], function (ClinicsRouter) {
  var Router = Backbone.Router.extend({
    routes : {
       'clinics/' : 'invokeClinics'   
    },

    invokeClinics : function () {
      //new ClinicsRouter('clinics/');
    }
  });

});