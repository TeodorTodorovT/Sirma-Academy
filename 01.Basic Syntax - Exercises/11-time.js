function time(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes - hours * 60;

    console.log(`${hours}:${mins}`);
}

time(90);