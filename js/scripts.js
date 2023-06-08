// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
const number1 = Number(prompt("Enter a number:"));
const number2 = Number(prompt("Enter another number:"));

window.alert(add(number1, number2));


/*window.alert("The sum is " + add(3,5) + ".");
OR 
const additionResult = add(10,5);
window.alert(additionResult);
*/