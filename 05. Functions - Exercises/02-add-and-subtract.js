function addAndSubtract(a, b, c) {
    console.log(subtract(add(a, b), c));
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

addAndSubtract(42, 58, 100);
