const numToHex = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function hexSwitch(index) {
  return numToHex[index] || index.toString();
}

function rgbToHex(color) {
  let cleanColor = color.replace("rgb(", "").replace(")", "").replace(/ /g, "");
  let hexColor = [];

  cleanColor = cleanColor.split(",");

  for (number of cleanColor) {
    let firstDigit = Math.floor(number / 16);
    let secondDigit = number % 16;
    firstDigit = hexSwitch(firstDigit);
    secondDigit = hexSwitch(secondDigit);
    hexColor.push(firstDigit + secondDigit);
  }

  cleanColor = "#" + hexColor.join("");
  return cleanColor;
}
