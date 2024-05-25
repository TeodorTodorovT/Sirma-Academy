function numsUpTo1000EndingInN(n){
    for(let i = 0; i <= 1000; i++){
        if(i % 10 == n){
            console.log(i);
        }
    }

}


numsUpTo1000EndingInN(8);