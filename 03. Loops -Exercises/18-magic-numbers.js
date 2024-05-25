function magicNumbers(start, end, magicNumber){
    let isFound = '';
    let combinationCount = 0;
    for(let i = start; i <= end; i++){
        if(isFound){
            break;
        }
        for(let j = start; j <= end; j++){
            if(i + j == magicNumber){
                console.log(`Combination ${combinationCount + 1} - (${i} + ${j} = ${i + j})`);
                isFound = true;
                break;
            }
            combinationCount++
        }
    }
    if(!isFound){
        console.log(`${(combinationCount)} combinations - neither equals ${magicNumber}`);
    }
}


magicNumbers(1,2,3);