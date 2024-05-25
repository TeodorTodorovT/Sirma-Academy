function eraIdentifier(year, material) {
  if (year < 500 && material == "stone") 
    console.log("Ancient");
  else if (year >= 500 && year <= 1500 && material == "stone")
    console.log("Medieval");
  else if (year >= 1500 && year <= 1800 && material == "wood")
    console.log("Colonial");
  else if (year >= 1800 && year <= 1900 && material == "steel")
    console.log("Industrial");
  else if (year >= 1900 && material == "steel") 
    console.log("Modern");
  else 
    console.log("Uncertain");
}

eraIdentifier(2000, "steel");
