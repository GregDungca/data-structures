var BinarySearchTree = function(value) {
  var binarysearch = Object.create(bstMethods);
  binarysearch.left = null;
  binarysearch.right = null;
  binarysearch.value = value;
  return binarysearch;
};

var bstMethods = {};
bstMethods.insert = function (val) {
  // Base Case: if this.value = null 
    // this.value = new BinarySearchTree(val)
  // Recursive Case: 
    // else if val =< this.value
    //   insert(this.left);
    // else 
      // insert(this.right);
  if (val <= this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};
bstMethods.contains = function(val) {
  console.log(val);
  // Recursion
  // Base case: if this.value = val
  //   return true 
  // Termination condition: else if this.right && this.left === null
  //   return false
  // Recursive case: else 
  //   return this.contains(this.left) || this.contains(this.right)
  if ( this.value === val ) {
    return true;
  }
  else if ( this.right === null && this.left === null) {
    return false;
  }
  else {
    if ( val < this.value ) {
      return this.left.contains(val);
    }
    else {
      return this.right.contains(val);
    }
  }
};

bstMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
