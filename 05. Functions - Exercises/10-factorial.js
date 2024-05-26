function factorialDivision(a, b) {
    console.log((factorial(a) / factorial(b)).toFixed(2));
}

function factorial(x) {
    if (x == 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

factorialDivision(5, 2);
