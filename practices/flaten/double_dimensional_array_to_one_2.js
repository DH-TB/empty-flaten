'use strict';

function double_to_one(collection) {
  var oneDimensional = buildOneDimensional(collection);
  var noRepeat = buildNoRepeat(oneDimensional);

  return noRepeat;
}

function buildOneDimensional(collection) {
  var oneDimensional = [];

  collection.forEach(function (coll) {
    oneDimensional = findArray(oneDimensional, coll);
  });

  return oneDimensional;
}

function findArray(oneDimensional, coll) {
  for (var i = 0; i < coll.length; i++)
    oneDimensional.push(coll[i]);

  return oneDimensional;
}

function buildNoRepeat(oneDimensional) {
  var array = [];

  oneDimensional.forEach(function (one) {
    array = findNotSame(array, one);
  });

  return array;
}

function findNotSame(array, one) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === one) {

      return array;
    }
  }
  array.push(one);

  return array;
}

module.exports = double_to_one;
