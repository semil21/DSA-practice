// print sum of all numbers 


function addition(num) {

    if (num == 0) return 0;

    return num + addition(num - 1)
}

console.log(addition(5))

// Output : 15