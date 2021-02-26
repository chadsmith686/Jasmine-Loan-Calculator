it('should calculate the monthly rate correctly', function () {
  const values = {
      amount: 100000,
      years: 15,
      rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('764.99');
  });


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 29038475,
    years: 1,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('2479262.06');
});

it('should return infinity if years is blank', function() {
  const values = {
    amount: 29038475,
    years: 0,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('Infinity');
});

it('should return interest free if loan amount is zero', function() {
  const values = {
    amount: 0,
    years: 5,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});
