function sumEven(arr){
    let sum = 0;
    arr.forEach(x => {
        if(Number(x) % 2 == 0){
            sum += Number(x);
        }
    })

    console.log(sum);
}


sumEven(['3','5','7'])