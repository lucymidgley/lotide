# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucymidgley/lotide`

**Require it:**

`const _ = require('@lucymidgley/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: A function to extract the first element of an array.
* `tail`: A function to extract the subarray not containing the first element.
* `middle`: A function to extract the middle element(s) of an array.
* `assertArraysEqual`: An assertion function to check if 2 arrays are equal.
* `assertObjectsEqual`: An assertion function to check if 2 objects are equal.
* `assertEqual`: An assertion  function to check if 2 primitive data types are equal.
* `countLetters`: A function to count the number of letters in a string.
* `eqArrays` : A function to check if 2 arrays are equal.
* `eqObjects`: A function to check if 2 objects are equal.
* `findKey`: A function to search an object and check if a given key exists.
* `findKeyByValue`: A function to find the key of an object that is equal to the input value.
* `flatten`: A function that takes in a array of nested arrays and forms a new array of a single layer, made up of all the elements from the nested arrays.
* `letterPositions`: A function that takes in a string and outputs an object consisting of subarrays for all the positions of each letter in the given string.
* `map`: A function that takes in an array and a function and transforms every element in the given array by the input function.
* `takeUntil`: A function that takes in an array and a callback function and outputs a new array constisting of the elements of the original array until the callback function acting on the original array returns a truthy value.
* `without`: A function that takes in 2 arrays, and returns the first array without the elements of the second. 