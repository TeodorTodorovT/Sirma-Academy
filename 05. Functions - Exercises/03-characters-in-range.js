function charactersRange(a,b) {
    let result = [];
    if(a.charCodeAt(0) < b.charCodeAt(0)){
        for(let i = a.charCodeAt(0) + 1; i < b.charCodeAt(0); i++){
            result.push(String.fromCharCode(i));
        }
    }else{
        for(let i = b.charCodeAt(0) + 1; i < a.charCodeAt(0); i++){
            result.push(String.fromCharCode(i));
        }
    }

    console.log(result.join(" "));
}

charactersRange('C', '#')