//----------Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

const displayFahrenheit = (f) => {
  const farSpan = document.querySelector("#far");
  farSpan.textContent = f;
};

const handleSubmit = function (e) {
  e.preventDefault();
  const celsius = e.target.celsius.value;

  if (celsius) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    displayFahrenheit(fahrenheit);
  }
};
const form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
//------------Fahrenheit to Celsius

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

const displayCelsius = (c) => {
  const celSpan = document.querySelector("#cel");
  celSpan.textContent = c;
};
const handleSubmit2 = function (e) {
  e.preventDefault();
  const fahrenheit = e.target.fahrenheit.value;
  if (fahrenheit) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    displayCelsius(celsius);
  }
};
const form2 = document.querySelector("#form2");
form2.addEventListener("submit", handleSubmit2);
