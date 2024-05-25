function equalArrays(arrOne, arrTwo) {
    let sum = 0;
    let isEqual = true;
    for(let i = 0; i < arrOne.length; i++){
        if(Number(arrOne[i]) == Number(arrTwo[i])){
            sum += Number(arrOne[i]);
        }else{
            console.log(`Arrays are not indetical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }
    
    if(isEqual){
        console.log(`Arrays are indentical. Sum: ${sum}`);
    }
}

equalArrays(['1'],['10']);