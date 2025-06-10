var missingNumber = function(nums) {
    let total = nums.length;;
    for (let i=0; i<nums.length; i++) {
        total += i - nums[i];
    }
    return total;
}


// Testing
let nums = [3,0,1];
console.log(missingNumber(nums));

nums = [1,6,4,2,3,5,7,0,9];
console.log(missingNumber(nums));
