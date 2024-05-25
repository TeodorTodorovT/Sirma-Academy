function grocery(product, city, quantity) {
    let price = 0;
  switch (city) {
    case "Sofia":
      switch (product) {
        case "tea":
            price = 0.5 * quantity;
          break;
        case "water":
            price = 0.8 * quantity;
          break;
        case "juice":
            price = 1.2 * quantity;
          break;
        case "sweets":
            price = 1.45 * quantity;
          break;
        case "chips":
            price = 1.6 * quantity;
          break;

        default:
          break;
      }
      break;
    case "Plovdiv":
        switch (product) {
            case "tea":
                price = 0.4 * quantity;
              break;
            case "water":
                price = 0.7 * quantity;
              break;
            case "juice":
                price = 1.15 * quantity;
              break;
            case "sweets":
                price = 1.30 * quantity;
              break;
            case "chips":
                price = 1.5 * quantity;
              break;
    
            default:
              break;
          }
      break;
    case "Varna":
        switch (product) {
            case "tea":
                price = 0.45 * quantity;
              break;
            case "water":
                price = 0.7 * quantity;
              break;
            case "juice":
                price = 1.1 * quantity;
              break;
            case "sweets":
                price = 1.35 * quantity;
              break;
            case "chips":
                price = 1.55 * quantity;
              break;
    
            default:
              break;
          }
      break;

    default:
      break;
  }

  console.log(price.toFixed(2));
}

grocery('juice', 'Sofia', 6);
