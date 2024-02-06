// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


//     Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


var isValid = function (s) {
    let parenthesesArr = [];
    for (i = 0; i < s.length; i++) {
        let currentChar = s[i]
        if (currentChar === "[" || currentChar === "{" || currentChar === "(") {
            parenthesesArr.push(currentChar)
        } else {
            if (parenthesesArr.length === 0) {//there is no "[{(" in the array , no parentheses in the str
                return false
        }

        let lastChar = parenthesesArr.pop()
        if ((currentChar === ")" && lastChar !== "(") ||
            (currentChar === "]" && lastChar !== "[") ||
            (currentChar === "}" && lastChar !== "{")) {
            return false
            //the function would return false because there is a mismatch between '(' and ']' – the opening and closing brackets do not correspond correctly.
        }
    }
    }
    return parenthesesArr.length === 0;

};

console.log(isValid(" "))
