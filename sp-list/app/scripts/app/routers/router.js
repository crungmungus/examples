/**
 * Routers are configuration, not controllers!
 * See: http://jsondata.tumblr.com/post/26508172926/backbone-3
 */
define(['app', 'routers/clinics', 'routers/treatments', 'routers/home'], function (app, ClinicsRouter, TreatmentsRouter, HomeRouter) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes : {
      '' : 'invokeDefault',
      'clinics/*subroute' : 'invokeClinics',
      'treatments/*subroute' : 'invokeTreatments'
    },

    invokeDefault : function () {
      new HomeRouter();
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