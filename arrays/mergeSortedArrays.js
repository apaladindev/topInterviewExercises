// Given two integer matrices nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of 
// of elements in nums1 and nums2 respectively.
// Combine nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but should be stored inside the nums1 array.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements to be combined,
// and the last n elements are 0 and should be ignored. nums2 is n in length.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let aux = 0;
    let k = 0;
    let j = 0;
    let i = 0;

    // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    while (i < nums1.length) {
        if (nums2[j] < nums1[i] || nums1[i] === 0) {
            aux = nums1[i];
            nums1[i] = nums2[j];
            k = i+1;
            while (k <= nums1.length) {
                if (aux < nums1[k] || nums1[k] === 0) {
                    let tmp = aux;
                    aux = nums1[k];
                    nums1[k] = tmp;
                }
                k++;
            }
            j++;
        } else {
            i++;
        }
    }

    return nums1;
};

var mergePrime = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    return nums1;
};


// Testing
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
console.log(mergePrime(nums1, m, nums2, n));
