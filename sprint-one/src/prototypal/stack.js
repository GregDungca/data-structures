var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  
  newInstance.storage = {};
  newInstance.storage.length = 0;
  return newInstance;

};

var stackMethods = {};
stackMethods.size = function() {
  return this.storage.length;
}
stackMethods.push = function(value) {
  this.storage[this.storage.length] = value;
  this.storage.length++;
}

stackMethods.pop = function() {
  var result;
  if ( this.storage.length > 0 ) {
    result = this.storage[this.storage.length - 1];
    delete this.storage[this.storage.length - 1];
    this.storage.length--;
  }
  return result;
}


