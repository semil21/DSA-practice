// check string palindrome 

function checkPalindrome(str, start = 0, end = str.length - 1) {

    if (start >= end) return true;


    if (str[start] !== str[end]) return false;

    return checkPalindrome(str, start + 1, end - 1)

}


console.log(checkPalindrome("hannah"))
console.log(checkPalindrome("world"))
console.log(checkPalindrome("jack"))
console.log(checkPalindrome("ahha"))

// Output : true
// Output : false
// Output : false
// Output : true