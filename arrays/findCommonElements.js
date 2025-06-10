
// You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:

// answer1 : the number of indices i such that nums1[i] exists in nums2.
// answer2 : the number of indices i such that nums2[i] exists in nums1.
// Return [answer1,answer2].

// Example 1:
// Input: nums1 = [2,3,2], nums2 = [1,2]
// Output: [2,1]

// Example 2:
// Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
// Output: [3,4]
// Explanation:
// The elements at indices 1, 2, and 3 in nums1 exist in nums2 as well. So answer1 is 3.
// The elements at indices 0, 1, 3, and 4 in nums2 exist in nums1. So answer2 is 4.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let answer1 = 0;
    let answer2 = 0;
    let complement1 = {};
    let complement2 = {};

    // O(n + m)
    for (let i=0; i<nums1.length; i++) {
        complement1[nums1[i]] = true;
    }

    for (let j=0; j<nums2.length; j++) {
        complement2[nums2[j]] = true;
    }

    for(let i=0; i<nums1.length; i++) {
        if (complement2[nums1[i]]) {
            answer1++;
        }
    }

    for(let j=0; j<nums2.length; j++) {
        if (complement1[nums2[j]]) {
            answer2++;
        }
    }

    return [answer1, answer2];
};

// Testing
let nums1 = [2,3,2];
let nums2 = [1,2];
console.log(findIntersectionValues(nums1, nums2));

nums1 = [4,3,2,3,1];
nums2 = [2,2,5,2,3,6];
console.log(findIntersectionValues(nums1, nums2));