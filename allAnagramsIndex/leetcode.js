/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let indexResults = [];
  let anagrams = [];

  if (p.length > s.length) return indexResults;

  function allAnagrams(string) {
    let results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }

    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let remainingChar = string.substring(0, i) + string.substring(i + 1);
      let allRemainingCharAnagrams = allAnagrams(remainingChar);

      for (let j = 0; j < allRemainingCharAnagrams.length; j++) {
        results.push(firstChar + allRemainingCharAnagrams[j]);
      }
    }

    return results;
  }
  
  anagrams = allAnagrams(p);

  for (let i = 0; i < s.length - (p.length - 1); i++) {
    let alphaStringSegment = s.slice(i, i + p.length).split('').sort().join('');
    let alphaString = p.split('').sort().join('');

    if (alphaStringSegment === alphaString) {
      indexResults.push(i);
    }
  }

  return indexResults; 
};

console.log(findAnagrams("aaaaaaaaaa", "aaaaaaaaaaaaa"));

let add2 = function (num) {
  return num + 2;
}

module.exports = { findAnagrams, add2 };


