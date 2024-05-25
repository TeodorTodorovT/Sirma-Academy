function negativePositiveNumbers(arr) {
    let result = [];

    arr.forEach(x => {
        if (x >= 0) {
            result.push(x);
        } else {
            result.unshift(x);
        }
    });

    console.log(result);
}

negativePositiveNumbers([3,-2,0,-1]);
