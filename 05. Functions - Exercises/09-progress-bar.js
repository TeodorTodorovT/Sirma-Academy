function progressBar(percent){
    let progress = [];
    for (let i = 0; i < 10; i++) {
        if(i < percent / 10){
            progress.push('%');
        }else{
            progress.push('.')
        }
    }
    
    console.log(`${percent}% [${progress.join('')}]`);
    if(percent == 100){
        console.log("Complete!");
    }else{
        console.log("Loading...");
    }
}

progressBar(50)