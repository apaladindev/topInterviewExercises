
// Return true if the array is palindrome.

// Input: const arr = [1, 2, 3, 3, 2, 1]
// Output: true

var isPalindrome = function(nums) { // O(N)
    let j = nums.length-1;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] != nums[j]) {
            return false;
        }
        j--;
    }

    return true;
}

var isPalindrome = function(nums) { // O(N)
    let j = nums.length - 1;
    for (let i = 0; i < Math.floor(nums.length / 2); i++) { // We only need to iterate up to the middle
        if (nums[i] !== nums[j]) {
            return false;
        }
        j--;
    }
    return true;
};

let nums = [1, 2, 3, 3, 2, 1];
// let nums = [-1,2,1];
// let nums = [10];
console.log(isPalindromePrime(nums));
