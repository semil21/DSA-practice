function selectionSort(nums) {

    for (let i = 0; i < nums.length; i++) {

        let temp = i;

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[j] < nums[temp]) {
                temp = j
            }
        }

        [nums[i], nums[temp]] = [nums[temp], nums[i]]
    }

    return nums
}

console.log(selectionSort([50, 40, 30, 60, 20, 10]))

// Output : [ 10, 20, 30, 40, 50, 60 ]