// reverse an array 

function arrayReverse(arr, start = 0, end = arr.length - 1) {

    if (start >= end) return;

    [arr[start], arr[end]] = [arr[end], arr[start]];

    arrayReverse(arr, start + 1, end - 1);

    return arr
}


console.log(arrayReverse([1, 2, 3, 4, 5]))

// Output : [5, 4, 3, 2, 1]