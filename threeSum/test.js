const { expect } = require('chai');
const { threeSum } = require('./threeSum');

describe('Three Sum', () => {
  describe('of [-1, 0, 1, 2, -1, -4]', () => {
    let instance = [-1, 0, 1, 2, -1, -4];

    it('should return a matrix', () => {
      let result = threeSum(instance)
      let isMatrix = false;
      
      isMatrix = result.reduce((acc, el) => {
        return Array.isArray(el);
      }, false);
  
      expect(isMatrix).to.eql(true);
      expect(result).to.be.a('array')
    })
  
    it('should be a matrix with 3 numbers in each array', () => {
      let result = threeSum(instance);
      let isMatrixOfThree = false;
  
      isMatrixOfThree = result.reduce((acc, el) => {
        return acc === false ? false : el.length === 3 ? true: false;
      }, true);
  
      expect(isMatrixOfThree).to.eql(true);
    })
  
    it('should be a matrix with all values accumulating to 0', () => {
      let result = threeSum(instance);
      let isEqualToThree = false;
  
      isEqualToThree = result.reduce((acc, el) => {
        if (acc === false) {
          return false;
        } else {
          if (!el.reduce((acc2, el2) => { return acc2 + el2; })) {
            return true;
          } else {
            return false;
          }
        }
      }, true);
  
      expect(isEqualToThree).to.eql(true);
    })
  
    it('should not return duplicate triplets', () => {
      let result = threeSum(instance);
      let resObject = {};
      let hasDuplicates = false;
  
      result.forEach(el => {
        resObject[el] = true;
      });
  
      hasDuplicates = result.length === Object.keys(resObject).length ? false : true;
  
      expect(hasDuplicates).to.eql(false);
    })

    it('should eql provided solution', () => {
      expect(threeSum(instance)).to.eql([[-1, 0, 1], [-1, -1, 2]]);
    })
  })


})