function palindromeNumbers(arr) {
    arr.forEach((x) => {
        console.log(isPalindrome(x));
    });
}

function isPalindrome(num) {
    let numToStringArray = num.toString().split('');
    let reversedArray = num.toString().split('').reverse();

    for (let i = 0; i < numToStringArray.length; i++) {
        if (numToStringArray[i] !== reversedArray[i]) {
            return false;
        }
    }
    return true;
}


palindromeNumbers([32,2,232,1010])