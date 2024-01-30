

// Algorithm

function combinationSum(candidates, target) {
  let buffer = []; //store combinations
  let result = []; // valid combinations that sums to target
  search(0, target);
  return result;

  function search(startIdx, target) {
    if (target === 0) {
      console.log(buffer.slice());
      return result.push(buffer.slice()); // slice creates a copy and stored in results array
    } 
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    console.log(buffer);
    console.log("Target is " + target);
    console.log(startIdx, + " " + target - candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
}

// Implementation
// Example 1
const array1 = [2,3,6,7] // [2,2,3] [7]
const target1 = 7
const totalCombination = combinationSum(array1,  target1)
console.log(`The max possible combinations for the given array ${array1} & the target '${target1}' is`);
console.log(totalCombination);

// Example 2
// const array2 = [2,3,5]
// const target2 = 8
// const totalCombination2 = combinationSum(array2,  target2)
// console.log(`The max possible combinations for the given array ${array2} & the target '${target2}' is`);
// console.log(totalCombination2);


// // BIG O Notation
// Time complexity -  O(2^n) - where n is the length of the array
// Space complexity - O(n) 

// RECURSION
// programming concept that involves function calling itself to solve a problem

// RECURSIVE CASE - Function calls itself
// BASE CASE - In recursion there is always a BASE CASE (where it stops and returns)