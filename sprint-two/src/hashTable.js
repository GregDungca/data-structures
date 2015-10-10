

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i ++ ) {
    this._storage.set(i, []);
  }
  this._numTuples = 0;
};

HashTable.prototype.insert = function(k, v) {

  if (this._numTuples / this._limit >= 0.75) {
    var temp = [];
    this._storage.each(function (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        temp.push(bucket[i]);
      }
    });
    for (var i = 0; i < this._limit; i++) {
      this._storage.set(i, []);
      this._numTuples = 0;
    }
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < temp.length; i++) {
      var key = temp[i][0];
      var value = temp[i][1];
      this.insert(key, value);
    }
  }
  // } else if (this._numTuples / this._limit <= 0.25) {
  //   var temp = [];
  //   this._storage.each(function (bucket) {
  //     for (var i = 0; i < bucket.length; i++) {
  //       temp.push(bucket[i]);
  //     }
  //   });
  //   for (var i = 0; i < this._limit; i++) {
  //     this._storage.set(i, []);
  //     this._numTuples = 0;
  //   }
  //   this._limit /= 2;
  //   this._storage = LimitedArray(this._limit);
  //   //console.log(this._limit);
  //   console.log('Start temp transfer');
  //   for (var i = 0; i < temp.length; i++) {
  //     console.log(i + ',' + temp.length);
  //     var key = temp[i][0];
  //     var value = temp[i][1];
  //     this.insert(key, value);
  //   }
  // }

  //========================================================
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined || this._storage.get(index) === null) {

    var bucket = [[k,v]];
    this._storage.set(index, bucket);
    this._numTuples++;
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
      this._numTuples++;
    }
  }
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


