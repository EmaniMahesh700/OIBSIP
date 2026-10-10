document.getElementById('convert-btn').addEventListener('click', function () {
  const degreesInput = document.getElementById('degrees').value;
  const unit = document.getElementById('unit').value;
  const resultText = document.getElementById('result-text');

  if (degreesInput === '' || isNaN(degreesInput)) {
    resultText.style.color = '#ef4444';
    resultText.textContent = 'Please enter a valid number!';
    return;
  }

  const temp = parseFloat(degreesInput);
  resultText.style.color = '#38bdf8';

  if (unit === 'celsius') {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    resultText.innerHTML = `${temp.toFixed(2)} °C = <b>${f.toFixed(2)} °F</b> | <b>${k.toFixed(2)} K</b>`;
  } else if (unit === 'fahrenheit') {
    const c = (temp - 32) * 5/9;
    const k = c + 273.15;
    resultText.innerHTML = `${temp.toFixed(2)} °F = <b>${c.toFixed(2)} °C</b> | <b>${k.toFixed(2)} K</b>`;
  } else if (unit === 'kelvin') {
    const c = temp - 273.15;
    const f = (c * 9/5) + 32;
    resultText.innerHTML = `${temp.toFixed(2)} K = <b>${c.toFixed(2)} °C</b> | <b>${f.toFixed(2)} °F</b>`;
  } 
});