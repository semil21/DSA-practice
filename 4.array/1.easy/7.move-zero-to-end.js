// move all zeros to end 


// Input: nums = [0, 1, 4, 0, 5, 2]

// Output: [1, 4, 5, 2, 0, 0]

// Explanation:

// Both the zeroes are moved to the end and the order of the other elements stay the same


function moveZeroToEnd(nums) {

    let nonZero = [];
    let zero = []

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == 0) {
            zero.push(nums[i])
        }
        else {
            nonZero.push(nums[i])
        }
    }

    const res = [nonZero, zero]

    return res.flat()
}

console.log(moveZeroToEnd([0, 1, 4, 0, 5, 2]))

