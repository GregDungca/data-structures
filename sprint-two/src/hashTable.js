

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i ++ ) {
    this._storage.set(i, []);
  }
  this._numTuples = 0;
};

HashTable.prototype.insert = function(k, v) {
  

  // RATIO OVER 75======================================
  if (this._numTuples / this._limit >= 0.75) {
    var temp = [];
    this._storage.each(function (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        temp.push(bucket[i]);
      }
    });

    this._limit *= 2;
    //initialise empty buckets
    this._storage = LimitedArray(this._limit);
    this._numTuples = 0;
    for ( var i = 0; i < this._limit; i ++ ) {
      this._storage.set(i, []);
    }
    // log out storage
    // this._storage.each(function (bucket) {
    //   console.table(bucket);
    // });
    // var x = LimitedArray(2);
    // debugger;
    // x.each(function (bucket) {
    //   console.table(bucket);
    // });
    //console.log('start iteration');
    // console.log('start iteration');
    for (var i = 0; i < temp.length; i++) {
      var key = temp[i][0];
      var value = temp[i][1];
      this.insert(key, value);
      // if ( i === temp.length - 1 ) {
      //   this._storage.each(function (bucket) {
      //     console.table(bucket);
      //   });  
      // }
    } 

  }

  
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
  // console.log(this._numTuples);
  // this._storage.each(function (bucket) {
  //   console.table(bucket);
  // });
  
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
  console.log(this._numTuples);
  var index = getIndexBelowMaxForKey(k, this._limit);
  // find correct index in storage
    // find correct place in bucket
        // set to null
  

  if (this._numTuples / this._limit < 0.25 ) {
    console.log('here' + ',' + this._numTuples + ',' + this._limit);
    var temp = [];
    this._storage.each(function (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        temp.push(bucket[i]);
      }
    });

    this._limit /= 2;

    this._storage = LimitedArray(this._limit);
    for ( var i = 0; i < this._limit; i ++ ) {
      this._storage.set(i, []);
    }

    for (var i = 0; i < temp.length; i++) {
      var key = temp[i][0];
      var value = temp[i][1];
      this.insert(key, value);
      // if ( i === temp.length - 1 ) {
      //   this._storage.each(function (bucket) {
      //     console.table(bucket);
      //   });  
      // }
    } 
  }

  this._storage.each(function(bucket, bucketIndex) {
    if ( bucketIndex === index ) {
      for ( var i = 0; i < bucket.length; i ++ ) {
        if ( bucket[i][0] === k ) {
          // bucket[i][0] = null;
          bucket[i][1] = null;
          console.log('removing...');
          this._numTuples--;
        }
      }
    }
  });

  // this._storage.each(function (bucket) {
  //   console.table(bucket);
  // });
  
};

// Get correct bucket number from hash function for that key
// if bucket is not empty, loop through until key match or end
  // if match, remove by setting [k, v] to null
  // if end, no match
// if bucket is empty, no match

/*
 * Complexity: What is the time complexity of the above functions?
 */


