function waterConsumption(totalConsumption, numberOfPeople) {
   let DWCPP = (totalConsumption / 7 ) / numberOfPeople;
   console.log(DWCPP.toFixed(2));
}

waterConsumption(2450, 7);