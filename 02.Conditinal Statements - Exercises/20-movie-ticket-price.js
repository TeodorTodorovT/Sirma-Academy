function ticketPrice(age) {
  if (age <= 12) {
    console.log("$5");
  } else if (age <= 19) {
    console.log("$8");
  } else if (age >= 20) {
    console.log("$10");
  }
}

ticketPrice(13);
