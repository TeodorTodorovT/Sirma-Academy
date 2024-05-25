function pathDecision(item1, item2) {
    if(item1 == "sword"){
        if(item2 == "shield"){
            console.log("Path to the castle");
        }else{
            console.log("Path to the forest");
        }
    }else if(item1 == "map"){
        if(item2 == "coins"){
            console.log("Go to the town");
        }else {
            console.log("Camp");
        }
    }else{
        console.log("Wander aimlessy");
    }
}

pathDecision("torch", "flower")