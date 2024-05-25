function onlyIncreasing(arr) {
    let result = [];

    arr.forEach(x => {
        if(x > result[result.length - 1] || result.length == 0){
            result.push(x)
        }
    })
    console.log(result);
}


onlyIncreasing([20,3,2,15,6,1]);