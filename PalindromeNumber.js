// Given an integer x, return true if x is a
// palindrome
//     , and false otherwise.



//         Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//     Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//     Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

// option 1

var  isPalindrome = function(x){
    let newStr = String(x);
    if (newStr === newStr.split('').reverse().join.('')){
        return true
    }else{ return false}

}
// option 2 

var isPalindrome = function (x) {
    let strX = String(x);
    let i = 0
    let j = strX.length - 1
    while (i < j) {
        if (strX[i] !== strX[j]) {
            return false;
        }
        i++
        j--
    }
    return true
}
