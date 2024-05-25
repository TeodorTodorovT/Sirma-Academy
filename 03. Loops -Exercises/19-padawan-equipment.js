function padawanEquipment(
  budget,
  studentCount,
  lightsaberPrice,
  robePrice,
  beltPrice
) {
  let cost =
    lightsaberPrice * Math.ceil(studentCount * 1.1) +
    studentCount * robePrice +
    ((studentCount - Math.floor(studentCount / 6)) * beltPrice );

  if (cost <= budget) {
    console.log(`The money is enough - it would cost ${cost.toFixed(2)}lv.`);
  } else {
    console.log(`George Lucas will need ${(cost - budget).toFixed(2)}lv more.`);
  }
}

padawanEquipment(100, 42, 12.0, 4.0, 3.0);

