var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //If empty list (list.head === null), create new Node with the value and null
    //  list.head = new Node(value);
    //Else
    //  node.next = new Node(value);
    if ( list.tail === null ) {
      list.tail = new Node(value);
      list.head = list.tail;
    }
    else {
      list.tail.next = new Node(value);
      //re-assign tail to the new node above
      //search for the node where node.next === null, re-assign tail to this node
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function() {
    // assign first value to result
    var result = list.head.value;
    console.log(result);

    // reassign all nodes list.head = list.head.next
    list.head = list.head.next;
    console.log(list.head);

    //return result
    return result;

  };

  list.contains = function(target) {
    //recursion
    //base case: if list.next.value === target
    //  return true
    //termination condition: else if list.next = null
    //  return false
    //recursive case: else
    //  return contains (node.next)

    var recurse = function(currentNode) {
      if ( currentNode.value === target ) {
        return true;
      } else if ( currentNode.next === null ) {
        return false;
      } else {
        return recurse(currentNode.next);
      }
    };
    return recurse(list.head);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
