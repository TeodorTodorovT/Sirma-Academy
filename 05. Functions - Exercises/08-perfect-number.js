function perfectNumber(num) {
    let nums = [];

    for (let i = 1; i < num; i++) {
        if(num % i == 0){
            nums.push(i);
        }
    }

    let sum = 0;

    nums.forEach(x => {
        sum += x;
    })

    if(num == sum){
        console.log("Perfect Number!");
        console.log(nums.join(" + "));
    }else{
        console.log("It's not so perfect.");
    }
}

perfectNumber(20)