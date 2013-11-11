define(function () {
  'use strict';

  return {
    meta : {
      version : '0.1a'
    },

    extend : function (name, obj) {
      if(!name) {
        _.extend(this, obj);
      } else {
        this[name] = this[name] || obj;
        _.extend(this[name], obj);
      }
    },

    initialize : function (func) {
      func.apply(this);
    }
  };
});