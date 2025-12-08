// check palindrome 

function checkPalindrome(nums) {

    let reverseNum = ""
    let originalNum = nums
    while (nums > 0) {

        let digit = nums % 10

        reverseNum = reverseNum * 10 + digit

        nums = (nums - digit) / 10
    }

    if (reverseNum == originalNum) {
        return true
    }
    else {
        return false
    }
}

console.log(checkPalindrome(1223))

