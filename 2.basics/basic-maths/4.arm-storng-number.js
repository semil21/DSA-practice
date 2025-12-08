// check if its a arm strong number or not 

function checkArmStrong(nums) {

    let originalNum = nums
    let count = 0
    let sum = 0

    while (nums > 0) {
        count++;
        nums = Math.floor(nums / 10);
    }

    let temp = originalNum

    while (temp > 0) {
        let digit = temp % 10

        sum = sum + (digit ** count)

        temp = (temp - digit) / 10
    }

    if (sum === originalNum) {
        return true
    }
    else {
        return false
    }
}

console.log(checkArmStrong(153));
console.log(checkArmStrong(1234));