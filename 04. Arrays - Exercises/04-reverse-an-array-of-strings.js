function reverseArray(arr){
    let newArr = [];
    for(let i = arr.length - 1, j = 0; i >= 0; i--, j++){
        newArr[j] = arr[i];
    }

    console.log(newArr);
}

reverseArray(['a','b','c','d','e']);