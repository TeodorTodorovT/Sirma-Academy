function processOddNumbers(arr) {
    let result = [];
    arr.forEach((x) => {
        if (x % 2 != 0) {
            result.unshift(x * 2);
        }
    });

    console.log(result);
}

processOddNumbers([3,0,10,4,7,3]);
