var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.storage.length = 0;
};

Stack.prototype.size = function() {
  return this.storage.length;
}

Stack.prototype.push = function(value) { 
  this.storage[this.storage.length] = value;
  this.storage.length++;
}

Stack.prototype.pop = function() {
  var result;
  if ( this.storage.length > 0 ) {
    result = this.storage[this.storage.length - 1];
    delete this.storage[this.storage.length - 1];
    this.storage.length--;
  }
  return result;
}

