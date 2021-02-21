//1.  How to find the min and max NUMBER values in an array of numbers
const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

minMax([3, 4, 7, 6, 8, 9, 12, 34, 53, 64434, 324456, 1345, 34534]);
minMax(["3", "4", "67", "78", "32", "787", "890", "8", "2384"]);

// 2. How to find the lowest value in an array and remove it without mutating the original array.
const removeSmallest = (numbers) => {
  const newNumberArr = [...numbers];
  newNumberArr.splice(newNumberArr.indexOf(Math.min(...newNumberArr)), 1);
  return newNumberArr;
};
removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([5, 3, 2, 1, 4]);
removeSmallest([2, 2, 1, 2, 1]);

// 3. Example of using the reduce array method
var number = (busStops) =>
  busStops.reduce((acc, stop) => (acc += stop[0] - stop[1]));
// number([[10,0],[3,5],[5,8]]);
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
number([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]);
