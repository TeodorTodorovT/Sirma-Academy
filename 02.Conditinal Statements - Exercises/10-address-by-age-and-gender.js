function address(age, gender) {
  if (gender == "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else if (age < 16) {
      console.log("Master");
    }
  } else if (gender == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else if (age < 16) {
      console.log("Miss");
    }
  }
}

address(14, "f");
