function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function compose(...funcs) {
    return function (num) {
        return funcs.reduce((acc, fn) => fn(acc), num);
    };
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36
