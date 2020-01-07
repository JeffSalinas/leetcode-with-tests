const { expect } = require('chai')
const { isValid } = require('./isValid');

describe('Valid Parens', () => {
  it('should return a boolean', () => {
    expect(isValid('()')).to.be.a('boolean');
  })

  it('should return true with "()"', () => {
    expect(isValid('()')).to.eql(true);
  })

  it('should return true with "()[]{}"', () => {
    expect(isValid('()[]{}')).to.eql(true);
  })

  it('should return false with "(]"', () => {
    expect(isValid('(]')).to.eql(false);
  })

  it('should return false with "([)]"', () => {
    expect(isValid('([)]')).to.eql(false);
  })

  it('should return true with "{[]}"', () => {
    expect(isValid('{[]}')).to.eql(true);
  })
});