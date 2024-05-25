function armstrongCheck(num) {
    let armstrong = 0;
    for (let i = 0; i < num.toString().length; i++) {
        armstrong += Number(num.toString()[i]) ** num.toString().length
    }
    armstrong == num ? console.log("true") : console.log("false");
}


armstrongCheck(1634)