'use strict';

function double_to_one(collection) {

  return buildOneDimensional(collection);
}

function buildOneDimensional(collection) {
  var array = [];

  collection.forEach(function (coll) {
    array = buildArray(array, coll);
  });

  return array;
}

function buildArray(array, coll) {
  if (coll.length == null) {
    array.push(coll);
  }
  else {
    for (var i = 0; i < coll.length; i++) {
      array.push(coll[i]);
    }
  }

  return array;
}

module.exports = double_to_one;
