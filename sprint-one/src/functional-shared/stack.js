var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //extend(to, from)

  var someInstance = {};
  //var storage = {};
  someInstance.length = 0;


  // someInstance.push = stackMethods.push;
  // someInstance.size = stackMethods.size;
  _.extend(someInstance, stackMethods);


  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this[length] = value;
  this.length++;
}

stackMethods.size = function() {
  return this.length;
}


// stackMethods.pop = function() {
//   var result = storage[length - 1];
//   delete storage[length - 1];
//   if ( length > 0 ) {
//     length--;  
//   }
//   return result;
// }

//  stackMethods.size = function() {
//   return length;
// }


