

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  var numTuples = 0;
};

HashTable.prototype.insert = function(k, v) {

  //  if (numTuples / this_.limit > 0.75)
  if (numTuples / this._limit > 0.75) {
    var temp = new LimitedArray(this._limit * 2);
  } else if (numTuples / this._limit < 0.25) {
    var temp = new LimitedArray(this._limit / 2);
  }
  // _.temp = new limited array
    // Double in size and rehash
    reHash.call(temp);
    // limit * 2;
  //  else if (numTuples / this_.limit < 0.25)
    // _.temp = new limited array
    // Halve in size and rehash
    // limit / 2;
  // insert 
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined || this._storage.get(index) === null) {

    var bucket = [[k,v]];
    this._storage.set(index, bucket);
  } else {
    var match = false;
    for ( var i = 0; i < this._storage.get(index).length; i ++ ) {
      if ( this._storage.get(index)[i][0] === k ) {
        match = true;
        matchIndex = i;
      }
    }
    if (match) {
      this._storage.get(index)[matchIndex][1] = v;  
    } else {
      this._storage.get(index).push([k,v]);
      numTuples++;
    }
  }
  // var reHash = function(temp) {
  //   this.each(function(bucket) {
  //     for (var i = 0; i < bucket.length; i++) {
  //       temp.insert(k, v);
  //     }
  //   });
  //   this._storag = temp
  // }
  // var reHash = function()
    // for each bucket
      // for each tuple
          // call insert with the temp hash table
    // copy temp into ._storage
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    // find correct index in storage
    if (this._storage.get(index) !== undefined && this._storage.get(index) !== null) {
      for (var i = 0; i < this._storage.get(index).length; i++) {
        // find match of k
        if (this._storage.get(index)[i][0] === k) {
           return this._storage.get(index)[i][1];
        } 
      }
    } else {
      return null; 
    }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // find correct index in storage
    // find correct place in bucket
        // set to null
  this._storage.set(index, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


