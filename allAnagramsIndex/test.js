const expect = require('chai').expect;
const { findAnagrams, add2 } = require('./leetcode');

describe('All Tests', function () {
  describe('add2', function () {
    it('should return a number', function () {
      expect(add2(4)).to.be.a('number');
    })
    
    it('should return 6', function () {
      expect(add2(4)).to.eql(6);
    })
  
    it('should return 10', function () {
      expect(add2(10)).to.eql(12);
    })
  
    it('should return 2', function () {
      expect(add2(0)).to.eql(2);
    })
  
    it('should return 1', function () {
      expect(add2(-1)).to.eql(1);
    })
  
  })

  describe('findAnagrams', function () {
    it('should return an array', function () {
      expect(findAnagrams("cbaebabacd","abc")).to.be.a('array');
    })

    it('should return [0, 6]', function () {
      expect(findAnagrams("cbaebabacd", "abc")).to.eql([0, 6]);
    })
    
    it('should return [0, 1, 2]', function () {
      expect(findAnagrams("abab", "ab")).to.eql([0, 1, 2]);
    })
  })
})
