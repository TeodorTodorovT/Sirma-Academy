function palindromeCheck(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    
    word == reversed ? console.log('true') : console.log('false');
}


palindromeCheck("madam")