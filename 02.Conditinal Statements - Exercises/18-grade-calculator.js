function gradeCalculator(grade) {
    if(grade <= 59) {
        console.log("F");
    }else if(grade <= 69) {
        console.log("D");
    }else if(grade <= 79) {
        console.log("C");
    }else if(grade <= 89) {
        console.log("B");
    }else if(grade <= 100) {
        console.log("A");
    }
}

gradeCalculator(45);