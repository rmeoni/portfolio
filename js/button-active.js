// Get the container element
var btnContainer = document.getElementById("project-btns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tag-badge");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeBtn");
    current[0].className = current[0].className.replace(" activeBtn", "");
    this.className += " activeBtn";
  });
}