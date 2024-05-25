function numberReversal(num) {
    let reversed = "";
    for (let i = num.toString().length - 1; i >= 0; i--) {
        reversed += num.toString()[i];
    }

    console.log(reversed);
}


numberReversal(7);