function insertionSort(nums) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i; j >= 0; j--) {

            if (nums[j] < nums[j - 1]) {

                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            }
        }
    }

    return nums
}


console.log(insertionSort([50, 30, 40, 20, 10]))

// Output : [10, 20, 30, 40, 50]