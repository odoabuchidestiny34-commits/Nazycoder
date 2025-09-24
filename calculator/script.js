
    let isResultDisplayed = false;
    document.addEventListener("click", function (e){
        if (e.target.tagName === "INPUT" && e.target.type === "button") {
            const value = e.target.value;
            const display =
            document.getElementById('display');

            if (value === "=") {
                isResultDisplayed = true;
                return;
            }
            if (isResultDisplayed && !isNaN(value))
            {
                display.value = "";
                isResultDisplayed = false;
            }
        }
    }, true);
//function calculate
function calculateTrig(func){
    const display = 
    document.getElementById('display');
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        alert("please enter a valid number");
        return;
        }
        // convert value to radian
        let radians = value * (Math.PI / 180);

        if (func === 'sin'){
            display.value = 
            Math.sin(radians).toFixed(6);
        } else if (func === 'cos') {
            display.value = 
            Math.cos(radians).toFixed(6);
        } else if (func === 'tan'){
            display.value = 
            Math.tan(radians).toFixed(6);
        }
}
//function for square root
function calculateSqrt(){
    const display =
    document.getElementById('display');
    let value = parseFloat(display.value);
    if (isNaN(value)){
        alert("please enter a valid number");
        return;
    }
    if(value < 0){
        alert("cannot calculart square root of a negative number");
        return;
    }
    display.value = 
    Math.sqrt(value).toFixed(6);
}
//function for root
function calculatePower(power) {
    const displat = 
    document.getElementById('display');
    let value = parseFloat(display.value);
    if (isNaN(value)){
        alert("please enter a valid number");
        return;
    }
    display.value = Math.pow(value, power);
}

//function for square
function calculateRoot(root){
    const display = 
    document.getElementById('display');
    let value = parseFloat(display.value);
    return;
}
display.value = Math.pow(value, 1 / root);

