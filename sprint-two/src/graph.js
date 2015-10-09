

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.graph = [];
  this.valueLookup = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.valueLookup[this.graph.length] = node;
  this.graph.push([]);
  this.graph[this.graph.length-1][this.graph.length-1] = 1;

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.valueLookup, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // The index of the graph that is associated with the valueLookup i.e.:
  // // Loop through valueLookup, return key associated with nodeValue
  
  // index now equals the correct index in the graph
  // make column and row special characters only
  var index = this.findIndex(node);
  var nodeInGraph = this.graph[index];
  for (var i = 0; i < nodeInGraph.length; i++) {
    nodeInGraph[index][i] = "removed";
    nodeInGraph[i][index] = "removed";
  }
  delete this.valueLookup[index];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // This is a comment
  
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //set index of edge to equal 1
  //  get index of fromNode
  //    search for node with value of fromNode
  //  get index of toNode
  //    search for node with value of toNode

};
Graph.prototype.findIndex = function (value) {
  var index;
  for (var key in this.valueLookup) {
    if (this.valueLookup[key] === value) {
      index = key;
      break;
    }
  }
  return index;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//[[], [], [], []]

