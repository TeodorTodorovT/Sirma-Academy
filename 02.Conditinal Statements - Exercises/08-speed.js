function speed(km) {
  if (km <= 10) console.log("slow");
  else if (km <= 60) console.log("average");
  else if (km <= 120) console.log("fast");
  else if (km <= 160) console.log("super-fast");
  else console.log("turbo-fast");
}


speed(120);