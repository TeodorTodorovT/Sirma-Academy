function hollowRectangle(n, m) {
    let result = '';
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++){
            if(i === 0 || j === 0 || i === n - 1 || j === m - 1){
                result += '*';
            }else {
                result += ' ';
            }
            
        }
        result += '\n'
    }

    console.log(result);
}

hollowRectangle(3,4)