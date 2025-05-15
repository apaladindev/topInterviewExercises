// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) { // O(N)
    let result = [];
    let aux = 0;
    let num1 = 0;
    let num2 = 0;
    let size = l1.length > l2.length ? l1.length : l2.length;

    for (let i=0; i<size; i++) {
        num1 = l1[i] || 0;
        num2 = l2[i] || 0;
        result[i] = (num1 + num2 + aux) % 10;
        aux = Math.floor((num1 + num2 + aux) / 10);
    }

    if (aux > 0) {
        result[result.length] = aux;
    }

    return result;
};

// TEST

let l1 = [2,4,3];
let l2 = [5,6,4];
// Output: [7,0,8]
console.log(addTwoNumbers(l1, l2));

l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9];
// Output: [8,9,9,9,0,0,0,1]
console.log(addTwoNumbers(l1, l2));