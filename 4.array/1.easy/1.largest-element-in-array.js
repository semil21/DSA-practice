function largestElement(nums) {
    let temp = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (temp < nums[i]) {
            temp = nums[i];
        }
    }

    return temp;
}

console.log(largestElement([3, 2, 4, 70, 5, 6]));

// Output : 70
