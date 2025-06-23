const textbox = document.getElementById('textbox');
const toC = document.getElementById('toC');
const toF = document.getElementById('toF'); 
const result = document.getElementById('result');

function convert() {
    let temp = Number(textbox.value);

    if (toF.checked) {
        temp = (temp * 9/5) + 32;
        result.textContent = `${temp.toFixed(2)} °F`;
    } else if (toC.checked) {
        temp = (temp - 32) * 5/9;
        result.textContent = `${temp.toFixed(2)} °C`;
    } else {
        result.textContent = 'Please select a conversion option.';
    }
}
