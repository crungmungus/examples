/**
 * Routers are configuration, not controllers!
 * See: http://jsondata.tumblr.com/post/26508172926/backbone-3
 */
define(['app', 'routers/clinics'], function (app, ClinicsRouter) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes : {
      'clinics/*subroute' : 'invokeClinics'
    },

    invokeClinics : function (subroute) {
      new ClinicsRouter('clinics/');
    }
  });

  return Router;
});