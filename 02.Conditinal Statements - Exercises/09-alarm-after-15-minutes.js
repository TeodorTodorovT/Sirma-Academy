function snooze(hour, mins) {
    let finalHour;
    let finalMins;
    if(mins + 15 >= 60){
        finalMins = mins + 15 - 60;
        if(hour == 23) {
            finalHour = 0;
        }else {
            finalHour = hour + 1;
        }
        
    }else{
        finalMins = mins + 15;
        finalHour = hour;
    }

    if(finalMins < 10) {
        finalMins = "0" + finalMins;
    }

    console.log(`${finalHour}:${finalMins}`);
}


snooze(12, 48);