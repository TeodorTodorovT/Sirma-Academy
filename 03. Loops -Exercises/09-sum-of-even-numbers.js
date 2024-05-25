function sumEvenNums(n) {
    let sum = 0;
    for(let i = 2, j = 0; j < n; i += 2, j++){
        sum += i;
    }
    console.log(sum);
}

sumEvenNums(10);