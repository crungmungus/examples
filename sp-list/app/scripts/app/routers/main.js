define(function (require) {
  var ClinicsRouter = require('routers/clinics');
  
  return Backbone.Router.extend({
    routes : {
       'clinics/' : 'invokeClinics'   
    },

    invokeClinics : function () {
      //new ClinicsRouter('clinics/');
    }
  });
});