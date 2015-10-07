var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //extend(to, from)

  var someInstance = {};
  someInstance.storage = {};
  someInstance.storage.length = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[length] = value;
  this.storage.length++;
}

stackMethods.size = function() {
  return this.storage.length;
}

stackMethods.pop = function() {
  var result = this.storage[length-1];
  if ( this.storage.length > 0 ) {
    delete this.storage[length-1];
    this.storage.length--;
  }
  
  return result;
}



