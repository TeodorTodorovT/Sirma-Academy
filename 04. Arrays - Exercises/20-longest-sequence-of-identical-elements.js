function longestSequence(arr){
    let longest = [];
    let current = [arr[0]];
    for (let i = 1; i <= arr.length; i++) {
        if(current[i - 1] == arr[i]){
            current.push(arr[i])
        }else{
            current = [arr[i]]
        }

        if(current.length > longest.length){
            longest = current;
        }
        
    }

    console.log(longest);
}

longestSequence([4,4,4,4])