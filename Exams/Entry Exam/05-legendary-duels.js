function solve(sequence) {
    const stack = [];

    const matchingPairs = {
        ')': '(',
        '}': '{',
    };

    for (let i = 0; i < sequence.length; i++) {
        const char = sequence[i];
        if (char === '!') {
            stack.push(char); 
            if (sequence[i + 1] === '!') {
                stack.pop();
                i++;
            }
        } else if (char in matchingPairs) {
            const top = stack.pop();
            if (top !== matchingPairs[char]) {
                console.log('Not Legendary');
                return;
            }
        } else {
            stack.push(char);
        }
    }
    console.log(stack.length === 0 ? 'Legendary' : 'Not Legendary');
}
