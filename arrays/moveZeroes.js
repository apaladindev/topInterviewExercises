// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) { // O(N)
    let zeroCount = 0;
    let j = 0;
    for (let i=0; i<nums.length; i++) { // O(N)
        if (nums[i] === 0) {
            zeroCount ++;
        } else {
            nums[j] = nums[i];
            j++;
        }
    }

    for (let i=0; i<zeroCount; i++) { // O(N)
        nums[j++] = 0;
    }

    return nums;
};

var moveZeroesPrime = function(nums) { // O(N)
    let insertPos = 0; // Position where we will insert the next non-zero value

    // Move all non-zero elements to their new position
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];  // Place the non-zero number in its new position
            if (insertPos !== i) {  // If we're not at the same position, put 0 in the previous one
                nums[i] = 0;
            }
            insertPos++;
        }
    }

    return nums;
};


nums = [0,1,0,3,12];
console.log('moveZeroes', moveZeroes(nums));
console.log('moveZeroesPrime', moveZeroesPrime(nums));
