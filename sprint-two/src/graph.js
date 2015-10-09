

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

  // var targetNode = this.graph[index];
  // for (var i = 0; i < targetNode.length; i++) {
  //   targetNode[index][i] = "removed";
  //   targetNode[i][index] = "removed";
  // }
  for ( var i = 0; i < this.graph[index]; i ++ ) {
    this.graph[index][i] = 'removed';
    this.graph[i][index] = 'removed';
  }
  delete this.valueLookup[index];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeExists = false;
  // Lookup the graph indexes associated with the nodes
  var fromNodeIndex = this.findIndex(fromNode);
  var toNodeIndex = this.findIndex(toNode);

  // Lookup the nodes in the graph
  // var fromNodeInGraph = this.graph[fromNodeIndex];
  // var toNodeInGraph = this.graph[toNodeIndex];

  if (this.graph[fromNodeIndex][toNodeIndex] === 1) {
    edgeExists = true;
  }
  return edgeExists;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  // Lookup the graph indexes associated with the nodes
  var fromNodeIndex = this.findIndex(fromNode);
  var toNodeIndex = this.findIndex(toNode);

  // Lookup the nodes in the graph
  // var fromNodeInGraph = this.graph[fromNodeIndex];
  // var toNodeInGraph = this.graph[toNodeIndex];

  // Change the intersection of the nodes to 1
  //console.log(fromNodeIndex + ' ' + toNodeIndex);
  this.graph[toNodeIndex][fromNodeIndex] = 1;
  this.graph[fromNodeIndex][toNodeIndex] = 1;

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
  // Lookup the graph indexes associated with the nodes
  var fromNodeIndex = this.findIndex(fromNode);
  var toNodeIndex = this.findIndex(toNode);

  this.graph[toNodeIndex][fromNodeIndex] = 0;
  this.graph[fromNodeIndex][toNodeIndex] = 0;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.valueLookup) {
    cb(this.valueLookup[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//[[], [], [], []]

