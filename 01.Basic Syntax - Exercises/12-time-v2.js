function time(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes - hours * 60;

    if(hours < 10){
        hours = "0" + hours;
    }

    if(mins < 10){
        mins = "0" + mins;
    }

    console.log(`${hours}:${mins}`);
}

time(325);