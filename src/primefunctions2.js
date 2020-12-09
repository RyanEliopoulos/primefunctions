/*
  Ryan Paulos
  CS 320
  Assignment 5 - Coding Standards (ESLint) and Git
  NEW ALGORITHM: Start at the beginning, include a total sum
  Just walk up like a caterpillar..Once a slice exceeds the threshold move the right index back one, to the prime number
  just before the one that sent the total over the threshold.  Then pull the left index up by one, freeing up some
  space.  Then try moving the right index again. Repeat.
  When leftPost is pulled up one we should move rightPost backward until the slice length equals
  highestPrimeTermCount + 1
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

// Problem 2: Cumulative Sum
function cumulativeSum(array) {
  const sums = { sum: 0, iterativeSums: [] };
  function iterativeSummation(element) {
    this.sum += element;
    this.iterativeSums.push(this.sum);
  }
  array.forEach(iterativeSummation, sums);
  return sums.iterativeSums;
}

// Problem 3: Max Prime Sum
function maxPrimeSum(thresholdNumber) {
  // These walk the array of prime numbers and provide
  // the permutations.
  let leftPost = 0;
  let rightPost = 0;
  // The primes themselves
  const primes = primeGen(thresholdNumber);
  // running sum of the prime numbers held within leftPost and rightPost (inclusive).
  // Note, this value grows and shrinks
  let runningSum = 0;
  let termCount = 1;
  let highestPrime = 0;
  let highestPrimeTermCount = 0;
  // Exit condition: left_post === right_post >= threshold number
  runningSum += primes[leftPost];
  while (1) {
    // Establishing exit condition (no more possible permutations of primes)
    rightPost += 1;
    runningSum += primes[rightPost];
    termCount += 1;
    // Checks if primes now exceed the threshold.
    // Walks the last rightPost movement back 1
    // and moves the leftPost right until once again under
    // the thresholdNumber or leftPost == rightPost, indicating no further combinations are possible.
    if (runningSum >= thresholdNumber) {
      // Pull leftPost up one
      if (leftPost === rightPost) { break; } // Left post would be getting ahead of right post. Permutations exhausted
      runningSum -= primes[leftPost];
      leftPost += 1;
      termCount -= 1;
      // And move rightPost back until reaching highestPrimeTermCount + 1
      while (termCount > highestPrimeTermCount) {
        runningSum -= primes[rightPost];
        rightPost -= 1;
        termCount -= 1;
      }
      if (runningSum > thresholdNumber) { break; }
    }
    if (primes.includes(runningSum) && termCount > highestPrimeTermCount) {
      highestPrime = runningSum;
      highestPrimeTermCount = termCount;
    }
  }
  return [highestPrime, highestPrimeTermCount];
}

// Problem 1 results
const primeGenResults = primeGen(500);
console.log(primeGenResults);

// Problem 2 results
const cumulativeSumResults = cumulativeSum([1, 2, 3, 4]);
console.log(cumulativeSumResults);

// Problem 3 results
const maxPrimeSumResults = maxPrimeSum(10000);
console.log(maxPrimeSumResults);
