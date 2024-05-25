function fibonacciSum(n) {
    let sum = 0;
    let curr = 1;
    let prev = 0;
    let next = 0
    for(let i = 1; i <= n; i++){
        sum += curr;
        next = curr + prev;
        prev = curr;
        curr = next;


    }
    console.log(sum);
}

fibonacciSum(10);