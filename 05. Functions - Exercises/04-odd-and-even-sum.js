function oddAndEvenSum(num) {
    
    let oddSum = 0;
    let evenSum = 0;
    let numArr = num.toString().split('');

    numArr.forEach((x) => {
        if (x % 2 == 0) {
            evenSum += Number(x);
        } else {
            oddSum += Number(x);
        }
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`); 
}


oddAndEvenSum(3495892137259234)