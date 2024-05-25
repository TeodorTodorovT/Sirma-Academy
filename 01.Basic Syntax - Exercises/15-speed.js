function speed(distance, hours, minutes, seconds) {
    let secs = hours * 60 * 60 + minutes * 60 + seconds;
    let speed = distance / secs;

    console.log(speed.toFixed(6));
}

speed(2500, 5, 56, 23);