const expect = require('chai').expect;
const { romanToInt } = require('./romanToInt');

describe('Roman To Int', function () {
  it('should return a number', function () {
    expect(romanToInt('I')).to.be.a('number');
  })

  it('should return 5 when given V', function () {
    expect(romanToInt('V')).to.eql(5);
  })

  it('should return 3 when given III', function () {
    expect(romanToInt('III')).to.eql(3);
  })

  it('should return 4 when given IV', function () {
    expect(romanToInt('IV')).to.eql(4);
  })

  it('should return 9 when given IX', function () {
    expect(romanToInt('IX')).to.eql(9);
  })

  it('should return 58 when given LVIII', function () {
    expect(romanToInt('LVIII')).to.eql(58);
  })

  it('should return 1994 when given MCMXCIV', function () {
    expect(romanToInt('MCMXCIV')).to.eql(1994);
  })

})