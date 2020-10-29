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
// Works but takes forever. Needs improvement.
function maxPrimeSum(thresholdNumber) {
  // Recursive function for evaluating all subsets of a given prime number array.
  function maxxer(primeSubset, primeOriginal) {
    // Initializing counter variables
    let maxTerms = 0;
    let maxSum = 0;
    let currentTerms = 0;
    let currentSum = 0;

    // Iterating through each prime number, beginning with the smallest
    // in primeSubset, to determine the local term and sum maximums.
    const subLength = primeSubset.length;
    let i = 0;
    for (i; i < subLength; i++) {
      // Checking if next sum would exceed our largest prime
      const nextNumber = primeSubset[i];
      if (currentSum + nextNumber > primeOriginal[subLength - 1]) {
        break;
      }
      // Largest prime not exceeded.  Incrementing iteration variables.
      currentTerms += 1;
      currentSum += nextNumber;
      // Checking if new sum is a prime
      if (primeSubset.includes(currentSum)) {
        maxTerms = currentTerms;
        maxSum = currentSum;
      }
    }
    // Evaluating each subset of primeSubset, if they exist
    // First: Omit the first element of the array
    // Second: Omit the last element of the array
    if (subLength === 1) {
      return { terms: maxTerms, sum: maxSum };
    }
    // for quickly checking left and right recursive bests
    function termEvaluator(evalTerms, evalSum, maxxRet) {
      let updatedTerms = evalTerms;
      let updatedSum = evalSum;
      if (maxxRet.terms > evalTerms) {
        updatedTerms = maxxRet.terms;
        updatedSum = maxxRet.sum;
      } else if (maxxRet.terms === evalTerms && maxxRet.sum > evalSum) {
        updatedSum = maxxRet.sum;
      }
      return { terms: updatedTerms, sum: updatedSum };
    }

    // Beginning left subset evaluation
    const leftSubset = primeSubset.slice(1);
    let ret = maxxer(leftSubset, primeOriginal);
    let evalRet = termEvaluator(maxTerms, maxSum, ret);
    maxTerms = evalRet.terms;
    maxSum = evalRet.sum;

    // Beginning right subset evaluation
    const rightSubset = primeSubset.slice(0, subLength - 1);
    ret = maxxer(rightSubset, primeOriginal);
    evalRet = termEvaluator(maxTerms, maxSum, ret);
    maxTerms = evalRet.terms;
    maxSum = evalRet.sum;

    return { terms: maxTerms, sum: maxSum };
  }

  const primeArray = primeGen(thresholdNumber);
  const returnArray = [];
  const primeAnswer = maxxer(primeArray, primeArray);
  returnArray.push(primeAnswer.sum);
  returnArray.push(primeAnswer.terms);
  return returnArray;
}

const test = maxPrimeSum(1000);
console.log(test);
