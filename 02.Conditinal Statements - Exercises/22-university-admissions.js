function admission(score, extracurriculars) {
    if(score >= 90){
        console.log("Admitted");
    }else if(score >= 80 && extracurriculars >= 2) {
        console.log("Admitted");
    }else if(score < 89){
        console.log("Not admitted");
    }
}


admission(75, 12);