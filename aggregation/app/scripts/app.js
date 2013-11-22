/**
 * Item type primitive.
 * A branch or Item can be an item in the tree.
 */
var Item = function (obj) {
  this.children = [];
  _.extend(this, obj);
};

var p = Item.prototype;

/**
 * Nest items within an item.
 * Takes in an array of items and an iterator function for parsing them.
 */
p.add = function (items, func) {
  _.each(items, function (item) {
    var inner = (_.isFunction(func)) ? func(item) : item;
    this.children.push(new Item(inner));
  }, this);
};

/**
 * Patch _.each into prototype as a useful shortcut.
 */
p.each = function () {
  var args = [].slice.call(arguments);
      args.unshift(this.children);

  return _.each.apply(_, args);
};

/**
 * Pick children by criteria.
 */
p.find = function () {
  var args = [].slice.call(arguments);
      args.unshift(this.children);

  return _.where.apply(_, args).shift();
};

// Build the tree, starting from the root.
var items = [], root = new Item(),
    types = _.uniq(_.pluck(treatments, 'clinicTypeName'));

// Build a basic root index of clinic types in use (from treatments).
root.add(types, function (type) {
  return _.find(clinicTypes, function (t) {
    return t.name === type;
  });
});

// Add procedures to their respective parent clinic type.
_.each(treatments, function(treatment) {
  var proc, branch = root.find({'name' : treatment.clinicTypeName});

  // Add procedures into clinic type branch.
  if(branch) {
    branch.add([treatment], function (t) {
      return _.pick(t, 'procId', 'procedureName');
    });

    // And finally add the treatment to the procedure.
    proc = branch.find({ 'procedureName' : treatment.procedureName});
    proc.add([treatment]);
  }
});

// Tree is complete.
// console.log(root);


/**
 * If we're looking to normalize a group of objects by a set of common fields.
 * something like this:
 */
var HistoryItem = function (func) {
  this.initialize.apply(this, func.call(this));
};

var p = HistoryItem.prototype;

p.initialize = function (id, message) {
  this.id = id;
  this.message = message;
}

/*
var history = _.map(history, function (h) {
  return new HistoryItem(function () {
    return _.values(_.pick(h, 'id', 'message'));
  });
});
*/
//console.log(history);

// What if we had a mixed bag of objects with both common and differing properties/methods?
// Decorators? I don't know how to decorate a constructor without passing in a method.
var HistoryItem = function () {
  //console.log(arguments);
};

// Compose allows you to chain return values from the inside out.
var f = function (props) {
  return new HistoryItem(props);
}

var h = _.compose(f, function (props) {
  return _.values(_.pick(props, 'id', 'message'));
});

_.each(history, function (item) {
  h(item);
});



_.each(history, function (item) {

});