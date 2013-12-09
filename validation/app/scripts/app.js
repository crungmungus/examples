_.mixin({
  'exists': function (obj) {
      return obj != null;
  },

  /**
   */
  'isTruthy': function (obj) {
      return (obj !== false) && _.exists(obj);
  }
});

/**
 * Object Validation example from "Functional JavaScript, Page 82."
 */
function always(val) {
  return function() {
    return val;
  };
};

function checker() {
  var validators = _.toArray(arguments);

  console.log(validators);

  return function(obj) {
    return _.reduce(validators, function(errs, check) {
      if (check(obj)) {
        return errs
      } else {
        return _.chain(errs).push(check.message).value();
      }
    }, []);
  };
}

/**
 * Wraps around an object so as not to overwrite any existing properties.
 */
function validator(message, fun) {
  var f = function() {
    return fun.apply(fun, arguments);
  };

  f['message'] = message;
  return f;
}

// Example from Page 83.
var gonnaFail = checker(validator("ZOMG!", always(false)));
console.log(
  // gonnaFail(100)
);

var isValidString = function (msg) {
  return validator(msg, _.isString)
}

var isValidNumber = function (msg) {
  return validator(msg, _.isNumber)
}

// Set up a checker. Bit of a nasty interface.
var t = checker(
  isValidString('string fail'),
  isValidNumber('number fail')
).call(null, 'dfsdfsdfsd');

console.log(
  t
);


// Finally plug something into backbone's validate method.