var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums = nums.splice(i + 1, 1);
            i--; // Adjust the index to recheck the current position after the splice
        } 
    }
    return nums
};

console.log(nums([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
