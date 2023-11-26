// 1.
function greeting(name) {
  document.write(`Hi ${name}!<br>`);
  console.log(`Hi, ${name}`);
}

greeting("Paola");

// 2.
function additionOperation(number1, number2) {
  let add = number1 + number2;
  document.write(`If we add ${number1}, + ${number2} the result is ${add}<br>`);
  console.log(`If we add ${number1} + ${number2} the result is ${add}`);
}

additionOperation(1, 10);

// 3.
var number = 7;

function evenOdd(number) {
  if (number % 2 === 0) {
    document.write(`The number ${number} is even <br>`);
    console.log(`The number ${number} is even`);
  } else {
    document.write(`The number ${number} is odd <br>`);
    console.log(`The number ${number} is odd`);
  }
}

evenOdd(number);
