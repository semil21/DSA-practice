// Given an array of integers nums and an integer target, find the smallest index (0 based indexing) where the target appears in the array. If the target is not found in the array, return -1.


// Example 1

// Input: nums = [2, 3, 4, 5, 3], target = 3

// Output: 1

function linearSearch(nums, target) {


    let index = -1

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {
            index = i;
            break;
        }
    }

    return index
}

console.log(linearSearch([2, 3, 4, 5, 3], 30))