// left shift elmenet by k number of positions

function leftShiftbyKplaces(nums, index) {
    let temp = [];

    for (let i = 0; i < index; i++) {
        temp.push(nums[i]);
    }

    for (let j = index; j < nums.length; j++) {
        nums[j - index] = nums[j];
    }

    for (let k = 0; k < index; k++) {
        nums[nums.length - index + k] = temp[k];
    }

    return nums;
}

console.log(leftShiftbyKplaces([1, 2, 3, 4, 5, 6], 2));

// Output : [3, 4, 5, 6, 1, 2]
