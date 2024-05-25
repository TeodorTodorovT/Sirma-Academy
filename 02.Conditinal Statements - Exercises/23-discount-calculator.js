function discount(age, membership) {
    if(age < 18){
        console.log("10% discount");
    }else if (age >= 18 && age <= 64){
        if(membership == "Yes"){
            console.log("20% discount");
        }else {
            console.log("10% discount");
        }
    }else if(age >= 65) {
        console.log("30% discount");
    }
}


discount(70, "No")