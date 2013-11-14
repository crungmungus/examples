/**
 * Utility method module.
 * Returns a namespaced set of general utility methods. Predicates and helpers do not belong here!
 */
define(function () {
  var Utils = function () { };

  /**
   * Helper for bolting on objects to a name space.
   * Saves me having to nest objects with a name before passing them into _.extend.
   */
  Utils.extend = _.bind(function (name, obj) {
    if(!name) {
      _.extend(this, obj);
    } else {
      this[name] = this[name] || obj;
      _.extend(this[name], obj);
    }
  }, Utils.prototype);

  /**
   * General utility methods.
   * Any general, cross-purpose methods can sit in here.
   */
  Utils.extend(null, {

  });

  /**
   * String utility methods.
   */
  Utils.extend('strings', {
    escapeRegex : function (string) {
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    },

    alphabet : function () {
      return _.map(_.range(97, 123), function (i) {
        return String.fromCharCode(i);
      });
    }
  });

  /**
   * Vector utility methods.
   */
  Utils.extend('vectors', {
    distFromTop : function (innerEl, outerEl) {
      return innerEl.offset().top - outerEl.offset().top;
    }
  });

  /**
   * Date and time utilities.
   */
  Utils.extend('datetime', {

  });

  /**
   * Browser utilities.
   * Possibly extend this selectively with modernizr tests as we need them.
   */
  Utils.extend('browser', {

  });

  /**
   * Keyboard related methods.
   */
  Utils.extend('keyboard', {
    isArrowKey : function (k) {
      return k === 38 || k === 40;
    },

    isControlKey : function (k) {
      return (k === 15 ||  k === 19 || k === 18);
    },

    isEscapeKey : function (k) {
      return (k === 27);
    },

    isEnterKey : function (k) {
      return (k === 13);
    },

    isDeleteKey : function (k) {
      return (k === 8 || k === 46);
    }
  });

  /**
   * Underscore/LoDash mixins.
   * Anything that supplements or shortcuts between _. methods.
   */
  _.mixin({
    'exists' : function (obj) {
      return obj != null;
    },

    /**
     */
    'isTruthy' : function (obj) {
      return (obj !== false) && _.exists(obj);
    }
  });

  return new Utils();
});