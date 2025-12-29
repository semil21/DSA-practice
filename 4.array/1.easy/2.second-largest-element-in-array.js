function secondLargestElement(nums) {

    if (nums.length < 2) return -1;


    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i]
        }
        else if (nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i]
        }

    }

    return secondLargest === -Infinity ? -1 : secondLargest;

}


console.log(secondLargestElement([50, 45, 52, 45, 30, 20, 10]))

// Output : 50