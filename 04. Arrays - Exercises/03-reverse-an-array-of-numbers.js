function reverseArray(num, arr){
    let newArr = [];
    for(let i = num - 1, j = 0; i >= 0; i--, j++){
        newArr[j] = arr[i];
    }

    console.log(newArr);
}

reverseArray(4,[-1, 20, 99, 5]);