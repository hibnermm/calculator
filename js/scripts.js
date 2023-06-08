// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = Number(prompt("Enter a number:"));
const number2 = Number(prompt("Enter another number:"));

let sum = add(number1, number2);
let difference = subtract(number1, number2);
let product = multiply(number1, number2);
let quotient = divide(number1, number2);

window.alert(`The addition of your numbers ${number1} & ${number2} equals ${sum}.`);
window.alert(`The subtraction of your numbers ${number1} & ${number2} equals ${difference}.`);
window.alert(`The multiplication of your numbers ${number1} & ${number2} equals ${product}.`);
window.alert(`The division of your numbers  ${number1} & ${number2} equals ${quotient}.`);


/*window.alert("The sum is " + add(3,5) + ".");
OR 
const additionResult = add(10,5);
window.alert(additionResult);
*/