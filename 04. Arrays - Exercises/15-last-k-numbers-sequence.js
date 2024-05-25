function lastNumbersSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let next = 0;
        for (let j = i - 1; j >= i - k && j >= 0; j--) {
            next += result[j];
        }
        result.push(next);
    }
    console.log(result.join(' '));
}

lastNumbersSequence(6, 3);
