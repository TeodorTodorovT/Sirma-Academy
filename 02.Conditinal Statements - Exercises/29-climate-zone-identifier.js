function climateZone(latitude, direction) {
    let lat = Math.abs(latitude);

    if(lat > 66.5){
        console.log("Arctic Zone");
    }else if(lat >= 23.5){
        console.log("Temperate Zone");
    }else if (lat > 0){
        console.log("Tropic Zone");
    }else if (lat == 0){
        console.log("Equator");
    }
}

climateZone(-85, "N")