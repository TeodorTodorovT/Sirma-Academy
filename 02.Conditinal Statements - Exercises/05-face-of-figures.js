function findArea(figure, a, b) {
  let area;
  switch (figure) {
    case "square":
      area = a * a;
      break;
    case "rectangle":
      area = a * b;
      break;
    case "circle":
      area = Math.PI * a**2;
      break;
    case "triangle":
      area = 0.5 * a * b;
      break;

    default:
      break;
  }
  console.log(area.toFixed(2));
}

findArea("circle", 10);
