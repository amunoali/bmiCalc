document.getElementById('button').addEventListener('click', ()=>{
    let weightInput = document.getElementById('weight').value
    let heightInput = document.getElementById('height').value


    let bmi = ((weightInput) / (heightInput * heightInput)) * 703

    let bmiNum = bmi.toFixed(2)

    document.querySelector('.container').innerHTML =
    `Your BMI is ${bmiNum}`

})