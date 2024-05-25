function encoding(num) {
    for(let i = num.toString().length - 1; i >= 0; i--){
        if(num.toString()[i] == 0){
            console.log("ZERO");
        }else{
            let line = '';
            for(let j = 0; j < Number(num.toString()[i]); j++){
                let char = String.fromCharCode((Number(num.toString()[i]) + 33))
                line += char;
            }
            console.log(line);
            line = '';
        }
    }
}


encoding(9347439)