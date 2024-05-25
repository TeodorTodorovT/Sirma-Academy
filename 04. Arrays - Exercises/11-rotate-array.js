function rotateArray(arr, count) {
    for(let i = 0; i < count; i++){
        let lastElement = arr.pop();
        arr.unshift(lastElement)
    }

    console.log(arr.join(" "));
}


rotateArray(['Bannana','Orange','Coconut','Apple'], 15)