function getFibonacci() {
    let lastNum = 1;
    let currentNum = 1;

    return function() {
        let next = lastNum;
        lastNum = currentNum;
        currentNum = next + currentNum;
        return next;
    };
}


let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
