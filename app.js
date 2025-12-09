function updateColor() {
  const colorPicker = document.getElementById("color-picker");
  const colorCode = document.getElementById("color-code");
  const colorDisplay = document.getElementById("color-display");

  const selectedColor = colorPicker.value;
  colorCode.textContent = selectedColor;
  colorDisplay.style.backgroundColor = selectedColor;
}
