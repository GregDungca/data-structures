var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.length = 0;

};

Queue.prototype.size = function () {
  return this.storage.length;
};
Queue.prototype.enqueue = function (value) {
  for (var i = this.storage.length-1; i >= 0; i--) {
    this.storage[i+1] = this.storage[i];
  }
  this.storage[0] = value;
  this.storage.length++;
};
Queue.prototype.dequeue = function () {
  var result;
  if (this.storage.length > 0) {
    result = this.storage[this.storage.length-1];
    delete this.storage[this.storage.length-1];
    this.storage.length--;
  }
  return result;
};

