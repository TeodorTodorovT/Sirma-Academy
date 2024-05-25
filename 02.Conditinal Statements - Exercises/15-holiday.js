function holidayBudget(budget, season) {
  let location = "";
  let type = "";
  let spent = 0;
  if (budget <= 100) {
    location = "Bulgaria";
    if (season == "summer") {
      type = "Camp";
      spent = budget * 0.3;
    } else if (season == "winter") {
      type = "Hotel";
      spent = budget * 0.7;
    }
  } else if (budget <= 1000) {
    location = "Europe";
    if (season == "summer") {
      type = "Camp";
      spent = budget * 0.4;
    } else if (season == "winter") {
      type = "Hotel";
      spent = budget * 0.8;
    }
  } else if (budget > 1000) {
    location = "Asia";
    type = "Hotel";
    spent = budget * 0.9;
  }

  console.log(`Somewhere in ${location}\n${type} - ${spent.toFixed(2)}`);
}

holidayBudget(75, "winter");
