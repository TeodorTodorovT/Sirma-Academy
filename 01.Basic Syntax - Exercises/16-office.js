function office(price) {
    let totalPrice = price + (price * 0.8) + ((price + price * 0.8) * 1.15);
    
    console.log(totalPrice.toFixed(3));
}

office(720.50);