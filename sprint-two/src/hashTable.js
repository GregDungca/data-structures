

var HashTable = function() {
  this._limit = 8;
  HashTable.prototype._initialize.call(this);
};

HashTable.prototype.insert = function(k, v) {

  if ( this._numTuples / this._limit >= 0.75 ) {
    HashTable.prototype._resize.call(this,'double');  
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
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(index) !== undefined && this._storage.get(index) !== null) {
      for (var i = 0; i < this._storage.get(index).length; i++) {
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
  var removed = false;

  if ( this._numTuples / this._limit < 0.25 ) {
    HashTable.prototype._resize.call(this, 'half');
  }
  
  this._storage.each(function(bucket, bucketIndex) {
    if ( bucketIndex === index ) {
      for ( var i = 0; i < bucket.length; i ++ ) {
        if ( bucket[i][0] === k ) {
          console.log(this._numTuples);
          bucket[i][1] = null;
          removed = true;
        }
      }
    }
  });

  this._numTuples = removed ? this._numTuples - 1 : this._numTuples;
  // VIEW HASH TEST
  // this._storage.each(function (bucket) {
  //   console.table(bucket);
  // });
  
};

HashTable.prototype._initialize = function() {
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i ++ ) {
    this._storage.set(i, []);
  }
  this._numTuples = 0;
}

HashTable.prototype._resize = function(type) {
  var temp = [];
  if ( type === 'half' ) {
    this._limit /= 2;
  }

  else if ( type === 'double') {
    this._limit *= 2;
  }

  else {
    throw new Error('_initialize was not passed "half" or "double"');
  }
  
  this._storage.each(function (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      temp.push(bucket[i]);
    }
  });
  
  HashTable.prototype._initialize.call(this);

  for (var i = 0; i < temp.length; i++) {
    if ( temp[i][1] !== null ) {
      this.insert(temp[i][0], temp[i][1]);  
    }
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */


