function vegetableMarket(vegetable, day, quantity) {
  let price = 0;
  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    switch (vegetable) {
      case 'tomato':
        price = 2.5 * quantity;
        break;
      case 'onion':
        price = 1.2 * quantity;
        break;
      case 'letucce':
        price = 0.85 * quantity;
        break;
      case 'cucumber':
        price = 1.45 * quantity;
        break;
      case 'pepper':
        price = 5.5 * quantity;
        break;

      default:
        console.log('error');
        break;
    }
  } else if (day == "Saturday" || day == "Sunday") {
    switch (vegetable) {
        case 'tomato':
          price = 2.8 * quantity;
          break;
        case 'onion':
          price = 1.3 * quantity;
          break;
        case 'letucce':
          price = 0.85 * quantity;
          break;
        case 'cucumber':
          price = 1.75 * quantity;
          break;
        case 'pepper':
          price = 3.5 * quantity;
          break;
  
        default:
            console.log('error');
          break;
      }
  } else console.log("error");

  if(price != 0) {
    console.log(price.toFixed(2));
  }
}

vegetableMarket('bannana', 'Friday', 5)
