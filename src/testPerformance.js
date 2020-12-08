describe('Test for Performance', function () {
  describe('MaxPrimeSum', function () {
    this.slow(0);
    it('maxPrimeSum(10000) should take less than 2300ms',
      function () {
        this.timeout(2300);
        maxPrimeSum(10000);
      });
    it('maxPrimeSum(100000) should take less than 6100ms',
      function () {
        this.slow(0);
        this.timeout(6100);
        primeGen(100000);
      });
  });
});
