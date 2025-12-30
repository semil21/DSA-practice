// left shift element by one position

function leftRotateByOnePlace(nums) {
    let temp = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i - 1] = nums[i];
    }

    nums[nums.length - 1] = temp;

    return nums;
}

console.log(leftRotateByOnePlace([1, 2, 3, 4, 5]));

// Output : [2, 3, 4, 5, 1]
