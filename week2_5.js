function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const range = document.getElementById("js-range");
const span = document.querySelector("#js-title span");
const form = document.getElementById("js-guess");
const num = document.getElementById("num");
const result = document.querySelector("#js-result span");
range.oninput = () => {
  span.textContent = range.value;
  num.max = range.value; 
};
form.onsubmit = (e) => {
  e.preventDefault();
  const max = parseInt(range.value);
  const guess = parseInt(num.value);
  const random = generateRandomNumber(0, max);

  if (guess === random) {
    result.textContent = `You choose: ${guess}, machine choose: ${random}. You win!`;
  } else {
    result.textContent = `You choose: ${guess}, machine choose: ${random}. You lost!`;
  }
};