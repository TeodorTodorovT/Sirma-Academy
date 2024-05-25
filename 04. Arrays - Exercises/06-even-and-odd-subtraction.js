function evenOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach(x => {
        if(x % 2 == 0) {
            evenSum += x;
        }else{
            oddSum += x;
        }
    })

    console.log(evenSum - oddSum);
}

evenOddSubtraction([2,4,6,8,10]);