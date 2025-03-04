Array.from(document.getElementsByTagName('input'))
  .forEach(element => {
    element.addEventListener('change', updateUI);
  });

function updateUI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const bmi = calculateBMI(weight, height);
  console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);
}

function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  return Math.round(weight / (heightInMeters * heightInMeters));
}

// ES-Modul-Export
export { calculateBMI };
