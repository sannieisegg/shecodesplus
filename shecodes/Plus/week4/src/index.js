function input(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  let h1 = document.querySelector(".current-city");
  h1.innerHTML = cityInput.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", input);
