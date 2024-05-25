function makeupShop(
  renovationPrice,
  powders,
  lipsticks,
  spirals,
  shadows,
  concealer
) {
  let revenue =
    powders * 2.6 +
    lipsticks * 3 +
    spirals * 4.1 +
    shadows * 8.2 +
    concealer * 2;
  let profit =
    powders + lipsticks + spirals + shadows + concealer >= 50
      ? revenue * 0.75 * 0.9
      : revenue * 0.9;

  if (profit >= renovationPrice) {
    console.log(`Yes! ${(profit - renovationPrice).toFixed(2)} BGN left.`);
  } else {
    console.log(`Not enough money! ${(renovationPrice - profit).toFixed(2)} BGN needed.`);
  }
}

makeupShop(320, 8, 2, 5, 5, 1)
