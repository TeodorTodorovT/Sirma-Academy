function vacationCalculator(days, type, assessment) {
    let cost = 0;

    if(type == 'single room') {
        cost = (days - 1) * 25;
    }else if(type == 'apartment') {
        if(days < 10) {
            cost = (days - 1) * 50 * 0.7;
        }else if (days >= 10 && days <= 15) {
            cost = (days - 1) * 50 * 0.65;
        }else if (days > 15) {
            cost = (days - 1) * 50 * 0.50;
        }
    }else if(type == 'presidential') {
        if(days < 10) {
            cost = (days - 1) * 100 * 0.9;
        }else if (days >= 10 && days <= 15) {
            cost = (days - 1) * 100 * 0.85;
        }else if (days > 15) {
            cost = (days - 1) * 100 * 0.80;
        }
    }

    assessment == 'positive' ? cost *= 1.25 : cost *= .9;

    console.log(cost.toFixed(2));
}

vacationCalculator(2, "apartment", "positive")