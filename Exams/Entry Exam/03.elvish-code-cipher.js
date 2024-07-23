function solve(encryptedMessage, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function shiftChar(char, shift) {
        if (char.match(/[a-z]/i)) {
            if (char >= 'a' && char <= 'z') {
                const index =
                    (char.charCodeAt(0) - 'a'.charCodeAt(0) - shift + 26) % 26;
                return alphabet[index];
            } else if (char >= 'A' && char <= 'Z') {
                const index =
                    (char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26;
                return alphabet[index].toUpperCase();
            } else {
                return ' ';
            }
        }else {
            return String.fromCharCode(char.charCodeAt(0) - n)
        }
    }

    let decipheredMessage = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        decipheredMessage += shiftChar(char, n);
    }

    console.log(decipheredMessage);
}
