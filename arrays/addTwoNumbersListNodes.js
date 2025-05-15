// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 2. Main function: adds two linked lists
function addTwoNumbers(l1, l2) { // O(N)
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
}

// 3. Helper: converts an array to a linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// 4. Helper: converts a linked list to an array (for easy printing)
function listToArray(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

// TEST

// Create the last node first
let l1_node3 = new ListNode(3);           // 3 → null
let l1_node2 = new ListNode(4, l1_node3); // 4 → 3 → null
let l1_node1 = new ListNode(2, l1_node2); // 2 → 4 → 3 → null
let l1 = l1_node1; // point to head

let l2_node3 = new ListNode(4);
let l2_node2 = new ListNode(6, l2_node3);
let l2_node1 = new ListNode(5, l2_node2);
let l2 = l2_node1;
console.log(addTwoNumbers(l1, l2));

const l3 = arrayToList([9,9,9,9,9,9,9]); // represents 9999999
const l4 = arrayToList([9,9,9,9]); // represents 9999
console.table(listToArray(addTwoNumbers(l3, l4)));