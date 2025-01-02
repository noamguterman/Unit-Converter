document.getElementById('btn-convert').addEventListener('click', convert)

function convert() {
  const inputValue = document.getElementById("userInput").value
  const unit = document.getElementById("unit").value
  const milesToKm = (unit === "milesToKm")
  let result = 0

  if (milesToKm === true) {
    result = (inputValue * 1.60934).toFixed(2)
  } else {
    result = (inputValue / 1.60934).toFixed(2)
  }

  document.getElementById("resultElement").innerHTML = result
}