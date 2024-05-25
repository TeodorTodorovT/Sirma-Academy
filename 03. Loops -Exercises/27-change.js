function change(amount) {
  let amountLeft = amount * 100;
  let coinsCount = 0;

  while (amountLeft >= 0) {
    if (amountLeft >= 200) {
      amountLeft -= 200;
      coinsCount++;
    } else if (amountLeft >= 100) {
      amountLeft -= 100;
      coinsCount++;
    } else if (amountLeft >= 50) {
      amountLeft -= 50;
      coinsCount++;
    } else if (amountLeft >= 20) {
      amountLeft -= 20;
      coinsCount++;
    } else if (amountLeft >= 10) {
      amountLeft -= 10;
      coinsCount++;
    } else if (amountLeft >= 5) {
      amountLeft -= 5;
      coinsCount++;
    } else if (amountLeft >= 2) {
      amountLeft -= 2;
      coinsCount++;
    } else if (amountLeft >= 1) {
      amountLeft -= 1;
      coinsCount++;
    } else {
      break;
    }
  }

  console.log(coinsCount);
}

change(1.23);
