// 1.
document.getElementById("btn").addEventListener("click", function () {
  var message = document.getElementById("message");
  message.style.display = "block";
  message.innerHTML = "Hello! You've clicked the button.";
});

// 2.
var newContent = document.getElementById("new-content");
newContent.innerHTML = "<p>Hello I'm the new content 😀</p>";

// 3.
var newContent = document.getElementById("new-content");
var showBtn = document.getElementById("showBtn");
var hideBtn = document.getElementById("hideBtn");

showBtn.addEventListener("click", function () {
  newContent.style.display = "block";
  showBtn.classList.add("hidden");
  hideBtn.classList.remove("hidden");
});

hideBtn.addEventListener("click", function () {
  newContent.style.display = "none";
  hideBtn.classList.add("hidden");
  showBtn.classList.remove("hidden");
});

// 4.
let names = [
  "Ana",
  " Carla",
  " Sandra",
  " Marina",
  " Pedro",
  " Juan",
  " Manuel",
  " Jesus",
  " Estela",
  " Carla",
];
console.log(names);

// 5.
document.getElementById("names-btn").addEventListener("click", function () {
  var namesMsg = document.getElementById("names-msg");
  namesMsg.style.display = "block";
  namesMsg.innerHTML = names;
});

// 6.
let numbers = ["1", "2", "3", "4", "10", "11", "12", "13", "14"];
console.log(numbers);

// 7.
document.getElementById("numbers-btn").addEventListener("click", function () {
  var countNumbers = document.getElementById("numbers-msg");
  countNumbers.innerHTML = numbers.length;
});

// 8.
var form = document.createElement("form");
form.setAttribute("id", "form");

var textTag = document.createElement("label");
textTag.textContent = "Name";

var textInput = document.createElement("input");
textInput.setAttribute("type", "text");
textInput.setAttribute("name", "name");

var emailTag = document.createElement("label");
emailTag.textContent = "Email";

var emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");

var sendForm = document.createElement("button");
sendForm.textContent = "Send Form";
sendForm.setAttribute("type", "button");
sendForm.addEventListener("click", function () {
  alert("Your form has been sent!");
});

form.appendChild(textTag);
form.appendChild(textInput);
form.appendChild(document.createElement("br"));
form.appendChild(emailTag);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(sendForm);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

document.body.appendChild(form);

// 9.
var table = document.createElement("table");
table.setAttribute("border", "1");

var tableHead = document.createElement("thead");
var rowHead = document.createElement("tr");

var columns = ["Name", "Age", "City"];

for (var i = 0; i < columns.length; i++) {
  var th = document.createElement("th");
  th.textContent = columns[i];
  rowHead.appendChild(th);
}

tableHead.appendChild(rowHead);
table.appendChild(tableHead);

var tableBody = document.createElement("tbody");

var data = [
  ["Juan", 25, "Oviedo"],
  ["Marta", 30, "Galicia"],
  ["Manuel", 22, "Santander"],
];

for (var j = 0; j < data.length; j++) {
  var row = document.createElement("tr");

  for (var k = 0; k < data[j].length; k++) {
    var cell = document.createElement("td");
    cell.textContent = data[j][k];
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
}

table.appendChild(tableBody);

document.body.appendChild(table);

// 10.
let cartoonsArray = [
  {
    id: 1,
    name: "Bugs Bunny",
    status: "Retired",
    species: "Animal",
    type: "Rabbit",
    gender: "Male",
  },
  {
    id: 2,
    name: "Donald Duck",
    status: "Retired",
    species: "Animal",
    type: "Duck",
    gender: "Male",
  },
  {
    id: 3,
    name: "Wall E",
    status: "Retired",
    species: "Robot",
    type: "Explorer",
    gender: "Unknown",
  },
  {
    id: 4,
    name: "Frozen Elsa",
    status: "Active",
    species: "Human",
    type: "Ice woman",
    gender: "Female",
  },
  {
    id: 6,
    name: "Barbie",
    status: "Active",
    species: "Toy",
    type: "Doll",
    gender: "Female",
  },
  {
    id: 7,
    name: "Homero Simpson",
    status: "Active",
    species: "Human",
    type: "Normal",
    gender: "Male",
  },
  {
    id: 8,
    name: "Santa's Helper",
    status: "Active",
    species: "Canine",
    type: "greyhound",
    gender: "Male",
  },
  {
    id: 9,
    name: "Woody",
    status: "Active",
    species: "Toy",
    type: "Cowboy",
    gender: "Male",
  },
  {
    id: 10,
    name: "Mc Queen",
    status: "Active",
    species: "Car",
    type: "Racing car",
    gender: "Male",
  },
];

// 11.
var tableBody = table.getElementsByTagName("tbody")[0];

if (tableBody) {
  for (var j = 0; j < cartoonsArray.length; j++) {
    var row = document.createElement("tr");

    for (var key in cartoonsArray[0]) {
      var cell = document.createElement("td");

      if (cartoonsArray[j].hasOwnProperty(key)) {
        cell.textContent = cartoonsArray[j][key];
      }

      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
}
