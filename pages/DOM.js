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

document.body.appendChild(form);
