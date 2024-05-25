function newBuilding(floors, roomsPerFloor) {
  let building = "";

  for (let i = floors; i >= 1; i--) {
    for (let j = 0; j < roomsPerFloor; j++) {
      if (i == floors) {
        building += ` L${i}${j}`;
      } else if (i % 2 == 0) {
        building += ` O${i}${j}`;
      } else {
        building += ` A${i}${j}`;
      }
    }
    building += "\n";
  }

  console.log(building);
}

newBuilding(4,4);
