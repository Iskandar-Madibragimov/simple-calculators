// BMI calculator
document.getElementById("submitBmi").onclick = function () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let BMI = weight / height ** 2;

  document.getElementById("answer").innerHTML = BMI.toFixed(1);
  if (BMI <= 18.5) {
    document.getElementById("info").innerHTML = "your skinny asf";
  } else if (BMI <= 24.9) {
    document.getElementById("info").innerHTML = "your pretty normal";
  } else if (BMI >= 25) {
    document.getElementById("info").innerHTML =
      "bruh u obese lose some weight fatty";
  }
};

// The HYpotonuse Calculator
function hypotonuse() {
  let sideA = document.getElementById("sideA").value;
  let sideB = document.getElementById("sideB").value;

  let sideC = sideA ** 2 + sideB ** 2;

  if (sideC != "") {
    document.getElementById("hypotonuse").innerHTML =
      Math.sqrt(sideC).toFixed(2);
  }
}

// Temperature converter
function celsius() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = celsius * (9 / 5) + 32;

  document.getElementById("convert").innerHTML = `${fahrenheit}°  `;
}