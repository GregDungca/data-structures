var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!_.contains(this._storageitem)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  if (_.contains(this._storage, item)) {
    var index = this._storage.indexOf(item);
  }
  this._storage[index] = "removed";
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// add: Linear O(n) as contains is linear
// contains is linear so O(n)
// remove: as above.

// Prototypal: Object.create with the object holding the shared methods