function rageExpenses(losesCount, headsetPrice, mousePrice, keyboardPrice, displayPrice){
    let cost = 0;
    let keyboardTrashCount = 0;

    for(let i = 1; i <= losesCount; i++){
        if(i % 2 == 0){
            cost += headsetPrice;
        }
        if(i % 3 == 0){
            cost += mousePrice;
        }
        if(i % 2 == 0 && i % 3 == 0){
            cost += keyboardPrice;
            keyboardTrashCount++;
        }
        if(keyboardTrashCount % 2 == 0 && keyboardTrashCount != 0){
            cost += displayPrice;
        }
    }

    console.log(`Rage expenses: ${cost.toFixed(2)} lv.`);
}


rageExpenses(23,12.5,21.5,40,200);