function evenPairs(firstNum, secondNum, firstRange, secondRange){
    for (let i = firstNum; i <= firstNum + firstRange; i++) {
        for (let j = secondNum; j <= secondNum + secondRange; j++) {
            if(isPrime(i) && isPrime(j)){
                console.log(`${i}${j}`);
            }
        
        }
        
    }
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}


evenPairs(10,30,9,6);