const principal = document.querySelector("#principal");
const interestRate = document.querySelector("#ir");
const timesCompounded = document.querySelector("#times");
const years = document.querySelector("#yrs");

const output = document.querySelector("#output");
const irOut = document.querySelector("#ir-out");

principal.addEventListener("input", calculate);
interestRate.addEventListener("input", calculate);
timesCompounded.addEventListener("input", calculate);
years.addEventListener("input", calculate);

function calculate() {
  const p = principal.value;
  const n = timesCompounded.value;
  const t = years.value;

  irOut.textContent = interestRate.value;
  document.body.style.backgroundColor = `rgb(${interestRate.value * 2}, ${
    255 - interestRate.value * 2
  }, 150)`;

  const r = interestRate.value * 0.01;

  const result = p * Math.pow(1 + r / n, n * t);

  if (isNaN(result)) {
    output.textContent = "__";
  } else {
    output.textContent = result;
  }
}

const button = document.getElementById("#button");
const image = document.getElementById("#image");

button.addEventListener("click", () => {
  image.classList.add("spin");
  setTimeout(() => {
    image.classList.remove("spin");
  }, 2000);
});
