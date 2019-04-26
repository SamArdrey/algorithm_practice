var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length-1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }
};

// Runtime: 112 ms, faster than 51.27% of JavaScript
// online submissions for Two Sum.
// Memory Usage: 34.9 MB, less than 43.90% of JavaScript
// online submissions for Two Sum.      