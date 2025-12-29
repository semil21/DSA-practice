// remove all duplicates from array and return its ccount.

function countUniqueElement(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            count++;
        }
    }

    return count;
}

// console.log(countUniqueElement([0, 0, 3, 3, 5, 6]))

// console.log(countUniqueElement([-2, 2, 4, 4, 4, 4, 5, 5]))
