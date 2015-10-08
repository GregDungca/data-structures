var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // extend new tree with tree methods
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me -- fixed?
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //tree.children[0].addChild(6);
  //Instantiate a new tree with the passed value 

  //Push new tree onto the children array of the parent

  this.children.push(Tree(value));
  
};

treeMethods.contains = function(target) {
  //Recursion

  //Base Case:
  //  if value of current node === target, return true
  //Termination Condition:
  //  else if current node has no children, return false
  //Recursive Case:
  //  else 
  //    Iterate through each of the children of current node
  //      for each, call recurse

  var recurse = function(tree) {
    if ( tree.value === target ) {
      return true;
    } else if ( tree.children.length === 0 ) {
      return false;
    } else {
      var contained = false;
      for ( var i = 0; i < tree.children.length; i ++ ) {
        if (recurse(tree.children[i])) {
          contained = true;
          break;
        }
      }
      return contained;
    }
  };

  return recurse(this);
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
// .addChild(): O(1)
// .contains(): O(n) 







//newTree.children.push({value});  // fix me