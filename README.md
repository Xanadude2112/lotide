# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me, Thomas Azran, as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xanadude2112/lotide`

**Require it:**

`const _ = require('@xanadude2112/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: this function is designed to retrieve the first item of an array, 
* `tail()`: this functions is designed to retrieve every item after the first item of an array, 
* `middle()`: this functions is designed to retrieve the 'center' of an array. if the array is odd, only one value will be retrieved, if the array is even, the two most center values will be retrieved,
* `assertArraysEqual()`: this functions is designed to assert whether the inputed array is equal to the expected array,
* `assertEqual()`: this function is given two parameters; actual and expected. it is designed to gage whether the actual parameter is equal to the expected parameter,
* `assertObjectsEqual()`: this function is designed to assert if one object parameter is equal to another object parameter,
* `countLetters()`: this function takes one parameter in the form of a string, and relays an object that counts the amount of time each letter in the sentence shows up,
* `countOnly()`: this function takes in an object that has conditions based on whether an name string is expected to show up or not in an array. it then takes the array and relays how many times the array item appears,
* `eqArrays()`: this function takes in two parameters of arrays and asserts whether they are equal to each other or not,
* `eqObjects()`: this function takes in two parameters of objects and asserts whether they are equal to each other or not,
* `findKey()`: when specified and passed an object value, this function retrieves the first instance of the key of said value,
* `findKeyByValue()`: this function takes the value of an object as a parameter and returns its respective key,
* `flatten()`: this function is designed to take simple nested arrays and print out their contents on the same level,
* `letterPositions()`: this function is designed to take in a parameter in the form of a string and relay the index of a chosen letter of the string,
* `map()`: this is a breakdown of the .map() function,
* `takeUntil()`: thiss function takes two parameters, an array and a callback function. it is designed to relay the array until a specfied index of the array identified in the callback,
* `without()`: this function takes two parameters; an array and items the user wishes to be omitted from the array. it then returns the array without the omitted item  
