// reverse a number 

function reverseNum(nums) {

    let reverse = ""

    while (nums > 0) {

        let digit = nums % 10

        reverse = reverse * 10 + digit

        nums = (nums - digit) / 10
    }

    console.log("reverse :", reverse)
}


reverseNum(12345000)

// Output:

// reverse : 54321