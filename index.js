let measurementSystem = "metric"

const selectSystem = () => {
    measurementSystem = document.getElementById("measurementSystem").value;
    console.log(measurementSystem, "metric", measurementSystem === "metric");
    if (measurementSystem === "metric") {
        console.log("with")
        document.getElementById('weightLabel').innerHTML = "Enter your weight (in kg):";
        document.getElementById('heightLabel').innerHTML = "Enter your height (in m):";
    }
    if (measurementSystem === 'imperial') {
        document.getElementById('weightLabel').innerHTML = "Enter your weight (in lbs):";
        document.getElementById('heightLabel').innerHTML = "Enter your height (in ft):";
    }
}

const findBMI = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = weight / (height * height);
    if (measurementSystem === "imperial") {
        bmi *= 703;
    }
    document.getElementById("bmi").innerHTML = `BMI = ${bmi}`;
    if (bmi <= 18.4) {
        document.getElementById("message").innerHTML = "You are underweight";
    } else if (bmi <= 24.9) {
        document.getElementById("message").innerHTML = "You are normal weight";
    } else if (bmi <= 29.9) {
        document.getElementById("message").innerHTML = "You are overweight";
    } else if (bmi <= 34.9) {
        document.getElementById("message").innerHTML = "You are obese (class 1)";
    } else if (bmi <= 39.9) {
        document.getElementById("message").innerHTML = "You are obese (class 2)";
    } else {
        document.getElementById("message").innerHTML = "You are obese (class 3)";
    }
}