// Problem Two Sum (Easy):
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let components = {};
    for (let i=0; i<nums.length; i++) {
        // console.log(nums[i], components[nums[i]]);
        if (components[nums[i]] != undefined) {
            return [components[nums[i]], i];
        }
        let diff = target - nums[i];
        components[diff] = i;
    }
};

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));