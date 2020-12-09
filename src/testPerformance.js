/* global maxPrimeSum */

describe('Test for Performance', function () {
  this.slow(0);
  describe('MaxPrimeSum', function () {
    it('maxPrimeSum(10000) should take less than 2300ms',
      function () {
        this.slow(0);
        this.timeout(23000);
        chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
      });
    it('maxPrimeSum(100000) should take less than 20000ms',
      function () {
        this.timeout(20000);
        chai.expect(maxPrimeSum(100000)).to.deep.equal([92951, 183]);
      });
  });
});
