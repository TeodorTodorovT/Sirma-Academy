function printWithStep(arr, step){
    let result = [];
    for (let i = 0; i < arr.length; i += step){
        result.push(arr[i])
    }

    console.log(result.join(" "));
}

printWithStep(['5','15','31','14','20'], 2);

