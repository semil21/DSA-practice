// You are given an integer n. You need to return the number of digits in the number.


// The number will have no leading zeroes, except when the number is 0 itself.

//use case 1

// Input: n = 4

// Output: 1

// Explanation: There is only 1 digit in 4.


//use case 2

// Input: n = 14

// Output: 2

// Explanation: There are 2 digits in 14.


function countDigit(nums) {
    // console.log(nums)

    let count = 0

    while (nums > 0) {

        let digit = nums % 10
        count += 1

        nums = (nums - digit) / 10

    }

    console.log(count)

}

countDigit(14)