function firstAndLastNumbers(k, arr) {
    let firstNumbers = [];
    let lastNumbers = [];

    for (let i = 0; i < k; i++) {
        firstNumbers.push(arr[i]);
        lastNumbers.unshift(arr[arr.length - 1 - i]);
    }

    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.join(' '));
}

firstAndLastNumbers(2, [7, 8, 9]);
