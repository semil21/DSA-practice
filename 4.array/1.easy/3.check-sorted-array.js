// check if array is sorted or not 


function checkIfArraySorted(nums) {

    let sorted = true;

    for (let i = 0; i < nums.length - 1; i++) {

        console.log("i :", nums[i])
        console.log("+1 :", nums[i + 1])
        console.log("-------------------")
        if (nums[i] > nums[i + 1]) {
            sorted = false
        }
    }

    return sorted

}


console.log(checkIfArraySorted([5, 10, 2, 20, 30]))

// Output : false