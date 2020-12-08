//import { primeGen } from 'primefunctions.js';



/* Beginning primeGen tests */

// Evaluating primeGen(10)
describe('primeGen of 10', function () {
  it('Evaluating the array of integers returned by primeGen(10) as a string. Should be:2,3,5,7',
    function () {
      chai.expect(primeGen(10).toString()).to.equal('2,3,5,7');
    });
});

// Evaluating primeGen(20)
describe('primeGen of 20', function () {
  it('Evaluating the array of integers returned by primeGen(20) as a string. Should be:2,3,5,7,11,13,17,19',
    function () {
      chai.expect(primeGen(20).toString()).to.equal('2,3,5,7,11,13,17,19');
    });
});

/* Beginning cumulativeSum tests */
describe('cumulativeSum of [1, 2, 3, 4]', function () {
  it('Evaluating the array of integers returned by cumulativeSum([1, 2, 3, 4]) as a string. Should be:1,3,6,10',
    function () {
      chai.expect(cumulativeSum([1, 2, 3, 4]).toString()).to.equal('1,3,6,10');
    });
});

describe('cumulativeSum of [10, 11, 12, 13, 14]', function () {
  it('Evaluating the array of integers returned by cumulateSum([10, 11, 12, 13, 14]) as a string. '
      + 'Should be:10,21,33,46,60',
  function () {
    chai.expect(cumulativeSum([10, 11, 12, 13, 14]).toString()).to.equal('10,21,33,46,60');
  });
});

