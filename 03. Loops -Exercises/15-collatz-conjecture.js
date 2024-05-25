function collatzConjecture(num) {
    let result = `${num}`;

    while(num != 1){
        if(num % 2 == 0){
            num /= 2;
            result += ` ${num}`;
        }else if(num % 2 != 0){
            num = num * 3 + 1;
            result += ` ${num}`;
        }
    }

    console.log(result);
}

collatzConjecture(9);