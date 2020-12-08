/* global primeGen, cumulativeSum, maxPrimeSum */

/* Beginning primeGen tests */
describe('Test for Correctness', function () {
  describe('PrimeGen', function () {
    it('primeGen(10) = [2, 3, 5, 7]',
      function () {
        chai.expect(primeGen(10)).to.deep.equal([2, 3, 5, 7]);
      });
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]',
      function () {
        chai.expect(primeGen(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
      });
  });

  /* Beginning cumulativeSum tests */
  describe('cumulativeSum', function () {
    it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10]',
      function () {
        chai.expect(cumulativeSum([1, 2, 3, 4])).to.deep.equal([1, 3, 6, 10]);
      });
    it('cumulativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]',
      function () {
        chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.deep.equal([10, 21, 33, 46, 60]);
      });
  });

  /* Beginning maxPrimeSum tests */
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(100) = [41, 6]',
      function () {
        chai.expect(maxPrimeSum(100)).to.deep.equal([41, 6]);
      });
    it('maxPrimeSum(1000) = [953, 21]',
      function () {
        chai.expect(maxPrimeSum(1000)).to.deep.equal([953, 21]);
      });
  });
});
