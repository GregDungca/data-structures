var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.storage.length = 0;

  _.extend(newInstance, queueMethods);

  return newInstance;

};

var queueMethods = {};
queueMethods.size = function() {
  return this.storage.length;
};
queueMethods.enqueue = function(value) {
  for (var i = this.storage.length-1; i >= 0; i--) {
    this.storage[i+1] = this.storage[i];
  }
  this.storage[0] = value;
  this.storage.length++;
};
queueMethods.dequeue = function () {
  var result = this.storage[this.storage.length-1];
  if (this.storage.length > 0) {
    delete this.storage[this.storage.length-1];
    this.storage.length--; 
  }
  return result;
};


