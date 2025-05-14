// Given an array of integers, our task is to write a program that efficiently finds the second-largest element present in the array.
// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the array is 35 and the second largest element is 34

// Input: arr[] = {10, 5, 10}
// Output: The second largest element is 5.
// Explanation: The largest element of the array is 10 and the second largest element is 5

// Input: arr[] = {10, 10, 10}
// Output: The second largest does not exist.
// Explanation: Largest element of the array is 10 there is no second largest element

var findSecodLargest = function(nums) { // O(N)
    let largestElement = 0;
    let secondLargestElement = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] > largestElement) {
            secondLargestElement = largestElement;
            largestElement = nums[i];
        } else if (nums[i] < largestElement && nums[i] > secondLargestElement) {
            secondLargestElement = nums[i];
        }
    }

    return secondLargestElement > 0 ? 'The second largest element is ' + secondLargestElement : 'The second largest does not exist';
}

const nums = [12, 35, 1, 10, 34, 1];
// const nums = [10, 5, 10];
// const nums = [10, 10, 10];
console.log(findSecodLargest(nums));