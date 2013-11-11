/**
 * Routers are configuration, not controllers!
 * See: http://jsondata.tumblr.com/post/26508172926/backbone-3
 */
define(['app', 'routers/clinics', 'routers/treatments'], function (app, ClinicsRouter, TreatmentsRouter) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes : {
      'clinics/*subroute' : 'invokeClinics',
      'treatments/*subroute' : 'invokeTreatments'
    },

    invokeClinics : function (subroute) {
      new ClinicsRouter('clinics/');
    },

    invokeTreatments : function (subroute) {
      new TreatmentsRouter('treatments/');
    }
  });

  return Router;
});