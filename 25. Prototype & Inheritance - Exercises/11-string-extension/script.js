(function () {
    String.prototype.ensureStart = function (str) {
        return str + this;
    };
    String.prototype.ensureEnd = function (str) {
        return this + str;
    };
    String.prototype.isEmpty = function () {
        return this.length > 0;
    };
    String.prototype.capitalize = function () {
        return this.replace(this[0], this[0].toUpperCase());
    };
    String.prototype.truncateWords = function (n) {
        let words = this.split(' ');

        if (words.length <= n) {
            return this.toString();
        }

        return words.slice(0, n).join(' ') + '...';
    };
})();

const string = 'hello how are you';

console.log(string.ensureStart('Hi'));
console.log(string.ensureEnd('Hi'));
console.log(string.isEmpty());
console.log(string.capitalize());
console.log(string.truncateWords(2));
