function calculator(num1, num2, operation) {
    let result = 0;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      default:
        break;
    }
    console.log(result.toFixed(2));
  }
  
  
  calculator(3.1,0.1,"multiply");