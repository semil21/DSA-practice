function bubbleSort(nums) {

    for (let i = 0; i < nums.length - 1; i++) {


        for (let j = 0; j < nums.length - i - 1; j++) {

            if (nums[j] >= nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }

        }
    }

    return nums
}


console.log(bubbleSort([20, 50, 40, 30, 10]))

// Output : [ 10, 20, 30, 40, 50 ]