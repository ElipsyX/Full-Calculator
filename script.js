const InputField = document.getElementById("inputfield1");

const InputField2 = document.getElementById("inputfield2");

const Addition = document.getElementById("addition");

const Subtraction = document.getElementById("subtraction");

const Multiplication = document.getElementById("multiplication");

const Division = document.getElementById("division");

Addition.addEventListener("click" , function() {
    const InputValue = parseFloat(InputField.value);
    const InputValue2 = parseFloat(InputField2.value);
    if (isNaN(InputValue) || isNaN(InputValue2)) {
        alert("Not a Number")
    } else {
    const sum = InputValue + InputValue2;
    alert("the sum is " + sum);
    InputField.value = "";
    InputField2.value = "";
    }
});
Subtraction.addEventListener("click" , function() {
    const InputValue = parseFloat(InputField.value);
    const InputValue2 = parseFloat(InputField2.value);
    if (isNaN(InputValue) || isNaN(InputValue2)) {
        alert("Not a Number")
    } else {
    const difference = InputValue - InputValue2;
    alert("the difference is " + difference);
    InputField.value = "";
    InputField2.value = "";
    }
});
Multiplication.addEventListener("click" , function() {
    const InputValue = parseFloat(InputField.value);
    const InputValue2 = parseFloat(InputField2.value);
    if (isNaN(InputValue) || isNaN(InputValue2)) {
        alert("Not a Number")
    } else {
    const product = InputValue * InputValue2;
    alert("the product is " + product);
    InputField.value = "";
    InputField2.value = "";
    }
});
Division.addEventListener("click" , function() {
    const InputValue = parseFloat(InputField.value);
    const InputValue2 = parseFloat(InputField2.value);
    if (isNaN(InputValue) || isNaN(InputValue2)) {
        alert("Not a Number")
    } else {
    const quotient = InputValue / InputValue2;
    alert("the quotient is " + quotient);
    InputField.value = "";
    InputField2.value = "";
    }
});
