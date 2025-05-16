// Given a string s, find the length of the longest substring without duplicate characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = {};
    let maxLength = 0;
    let start = 0;
    let currentLength = 0;

    for (let i=0; i<s.length; i++) {
        let char = s[i];

        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1;
        }
        seen[char] = i;

        currentLength = i - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
};


var lengthOfLongestSubstringSets = function(s) {
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

let text = 'abcabcbb';
console.log('Result:', lengthOfLongestSubstring(text));
text = 'bbbbb';
console.log('Result:', lengthOfLongestSubstring(text));
text = 'pwwkew';
console.log('Result:', lengthOfLongestSubstringSets(text));