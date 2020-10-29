/*
  Ryan Paulos
  CS 320
  Assignment 5 - Coding Standards (ESLint) and Git
  10/28/2020
 */

// Problem 1: Prime Number Generator
function primeGen(thresholdNumber) {
  // Constructing the list of integers
  const integerArray = [];
  let i;
  for (i = 2; i < thresholdNumber; i++) {
    integerArray.push(i);
  }
  // Building function to prune multiples
  // of the prime values from the integer list
  function removeMultiples(value, index, list) {
    // removing values evenly divisible by the context object
    if (!(value % this.valueOf())) {
      list.splice(index, 1);
    }
  }
  const primes = [];
  let currentPrime = 2;
  while (currentPrime < thresholdNumber) {
    primes.push(currentPrime);
    integerArray.forEach(removeMultiples, currentPrime);
    [currentPrime] = integerArray;
  }
  return primes;
}
