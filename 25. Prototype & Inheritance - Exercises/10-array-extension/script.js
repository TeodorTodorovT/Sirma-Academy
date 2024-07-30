(function () {
    Array.prototype.first = function () {
        return this[0];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.product = function () {
        return this.reduce((acc, val) => acc * val, 1);
    };

    Array.prototype.unique = function () {
        return [...new Set(this)];
    };
})();

const arr = [1, 2, 3, 4, 5];

console.log(arr.first());
console.log(arr.skip(2));
console.log(arr.take(3));
console.log(arr.product());
console.log(arr.unique());
