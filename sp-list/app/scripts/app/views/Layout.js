define([
  'app',
  'views/sidebar/main',
  'views/navbar/main',
  'text!templates/layout.html'
],
function (app, SideBar, NavBar,template) {
  'use strict';

  /**
   * General layout for my application, defines three main regions.
   * The side region should have a set of navigation views that persist throughout changes to main.
   */
  var Layout = Backbone.Marionette.Layout.extend({
    regions : {
      menu : '#menu',
      main : '#main',
      side : '#side'
    },

    initialize : function () {
      this.template = _.template(template);

      // Navigational components.
      this.navbar  = new NavBar();
      this.sidebar = new SideBar();
    },

    /**
     * Render side bar and menu here.
     * There's no other place I can think of for now.
     */
    onRender : function () {
      this.side.show(this.sidebar);
      this.menu.show(this.navbar);
    }
  });

  return Layout;
});