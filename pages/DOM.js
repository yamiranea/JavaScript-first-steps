// 1.
document.getElementById("btn").addEventListener("click", function () {
  var message = document.getElementById("message");
  message.style.display = "block";
  message.innerHTML = "Hello! You've clicked the button.";
});

// 2.
var newContent = document.getElementById("new-content");
newContent.innerHTML = "<p>Hello I'm the new content 😀</p>";
