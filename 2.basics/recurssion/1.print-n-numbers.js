// print number n number using recurssions

function printNum(num) {

    if (num == 0) return;

    printNum(num - 1)
    console.log(num)
}

printNum(5)

// Output:

// 1
// 2
// 3
// 4
// 5