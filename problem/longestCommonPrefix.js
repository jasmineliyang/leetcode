// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""
    }
    
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i])
                return strs[0].slice(0, i)
        }
    }

    return strs[0]
}

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""
    }

  let i = 0;
  while ( i < strs[0].length) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i])
                return strs[0].slice(0, i)
        }
    i++
    }
return strs[0].slice(0, i)
}


// In the implementations you provided, the for loops are used to iterate through the characters of the first string(strs[0]) and compare them with the corresponding characters in the other strings.If a mismatch is found, the function immediately returns the common prefix found so far using strs[0].slice(0, i).

// The reason for returning strs[0] at the end of the loop is based on the assumption that if the loop completes without finding any mismatches, then the first string in the array is the common prefix for all strings.

//     Here's the relevant part of the code: