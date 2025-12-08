// find divisor 


function findDivisor(num) {

    let diviors = []

    for (let i = 1; i * i <= num; i++) {

        if (num % i === 0) {
            diviors.push(i)

            if (i !== num / i) {
                diviors.push(num / i)
            }
        }
    }

    return diviors
}

console.log(findDivisor(36))