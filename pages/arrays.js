// 1.
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 2.
function viewCards(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
viewCards(cards);

// 3.
function addCard(array, card) {
  array.push(card);
  console.log(array);
}

addCard(cards, 21);

// 4.
function removeEvenNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array.splice(i, 1);
      i--;
    }
  }
  console.log(array);
}
removeEvenNumbers(cards);

// 5.
let maxCard = 0;

for (let number of cards) {
  if (maxCard < number) maxCard = number;
}
console.log(maxCard);

// 6.
let minCard = Infinity;

for (let number of cards) {
  if (minCard > number) minCard = number;
}
console.log(minCard);

// 7.
let initialText = "Hello YAMILA";
let modifiedText = convertToLowerCase(initialText);
console.log(modifiedText);
function convertToLowerCase(initialText) {
  return initialText.toLowerCase();
}

// 8.
let initialText2 = "hello yamila";
let modifiedText2 = convertToUpperCase(initialText2);
console.log(modifiedText2);
function convertToUpperCase(initialText2) {
  return initialText2.toUpperCase();
}

// 9.
let f5names = ["maria M", "maria C", "maria G", "isla", "nathalia"];

function upperLetter(list) {
  let capitalizedName = "";

  for (let i = 0; i < list.length; i++) {
    capitalizedName = list[i];
    capitalizedName =
      capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1);

    console.log(capitalizedName);
  }
}
upperLetter(f5names);
