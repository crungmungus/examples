(function ($) {
  'use strict';

  var DropDown = function (el, options) {
    this.$el = $(el);
    this.options = options;
  };

  DropDown.prototype = {
    defaults: {
      wrapper: function (item) {
        return '<li>' + item + '</li>';
      }
    },

    init : function () {
      this.$el.on('click', 'li', this.select);
    },

    select : function () {
      console.log('test');
    },

    reload : function (data) {
      var i = 0;

      if(data) {
        for(i = 0; i < data.length; i++) {
          this.$el.append(this.options.wrapper(data[i]);
        }
      }
    }
  };
})(jQuery);