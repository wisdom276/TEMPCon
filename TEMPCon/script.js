const convertBtn = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const celsiusInput = document.getElementById("celsius");
  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    resultElement.textContent = `${celsius.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  } else {
    resultElement.textContent = "Please enter a valid temperature.";
  }
});
