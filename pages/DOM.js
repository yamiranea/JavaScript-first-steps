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

document.getElementById("names-btn").addEventListener("click", function () {
  var namesMsg = document.getElementById("names-msg");
  namesMsg.style.display = "block";
  namesMsg.innerHTML = names;
});
