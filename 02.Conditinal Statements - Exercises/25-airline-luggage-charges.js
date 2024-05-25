function luggageCharges(weight, dimensions) {
    let charge = 0;
    
    if(weight > 50){
        charge += 100;
    }

    if(dimensions >= 158 && dimensions <= 178) {
        charge += 50;
    }else if(dimensions >= 179 && dimensions <= 208) {
        charge += 100;
    }else if(dimensions > 208){
        charge += 200;
    }

    if(dimensions > 158 && weight > 50){
        charge += 50;
    }

    console.log(charge);
}

luggageCharges(55, 190);