function Calculate() {
    let weight = document.querySelector("#weight").value
    let height = document.querySelector("#height").value
    let result = document.querySelector("#result")
    let bmi = weight / Math.pow(height, 2)
    result.innerHTML = bmi.toFixed(2)
    let stringResult = document.querySelector("#stringResult")

    if (bmi < 18.5) {
        stringResult.innerHTML = "Under Weight"
        stringResult.style.color = "#007bff"
    } else if (bmi > 18.6 && bmi < 24.99) {
        stringResult.innerHTML = "Normal"
        stringResult.style.color = "#28a745"
    } else if (bmi > 25 && bmi < 29.99) {
        stringResult.innerHTML = "Over Weight"
        stringResult.style.color = "#ffc107"
    } else {
        stringResult.innerHTML = "Obese"
        stringResult.style.color = "#dc3545"
    }
}
function Reset() {
    document.querySelector("#weight").value = 0
    document.querySelector("#height").value = 0
    document.querySelector("#stringResult").innerText = ''
    document.querySelector("#result").innerText = ''
   
}
