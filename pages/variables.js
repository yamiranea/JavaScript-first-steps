// 1.
let myName = "Yamila Belen ";
let lastName = "Ranea";
let age = 33;
let birthDate = 1990;
let currentYear = 2023;
var persona = true;
let number1 = 4;
let number2 = 2;

console.log(`I am ${age} years old and that is a ${typeof(age)}`);
console.log(`My name is ${myName} and my last name is ${lastName} and those are ${typeof(myName)}`);
console.log(`The boolean data type is ${persona} and that is a type of ${typeof(persona)}`);

document.write(`I am ${age} years old and that is a ${typeof(age)} <br>`);

document.write(`My name is ${myName} and my last name is ${lastName} and those are ${typeof(myName)} <br>`);

document.write(`The boolean data type is ${persona} and that is a type of ${typeof(persona)} <br>`);

//2.
let addition = number1 + number2;
let substraction = currentYear - birthDate;
let multiplication = number1 * number2;
let division = number1 / number2;

console.log(`The addition of ${number1} and ${number2} results ${addition}`);
console.log(`The substraction of the current year: ${currentYear} and my year of birth: ${birthDate} shows us that rigth now I am ${substraction} years old.`);
console.log(`The multiplication of ${number1} and ${number2} results ${multiplication}`);
console.log(`The division of ${number1} and ${number2} results ${division}`);


document.write(`The addition of ${number1} and ${number2} results ${addition} <br>`);

document.write(`The substraction of the current year: ${currentYear} and my year of birth: ${birthDate} shows us that rigth now I am ${substraction} years old. <br>`);

document.write(`The multiplication of ${number1} and ${number2} results ${multiplication} <br>`);

document.write(`The division of ${number1} and ${number2} results ${division} <br>`);

//3.
console.log(`Hi, my name is ${myName} ${lastName}`)
document.write(`Hi, my name is ${myName} ${lastName}`);