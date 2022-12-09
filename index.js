function hasTargetSum(array, target) {
  // Write your algorithm here
  //len = array.length
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(N^2)
  Reason: Finding a pair for every element in the array of size N
*/

/* 
  Add your pseudocode here
  -we need to iterate through the array and check each element in the array
  -check each other element in the array apart from the one previously checked
  -two of the values in the array should add up to the target
  -if that's the case, return true
      -else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
