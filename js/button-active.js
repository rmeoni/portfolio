// Portfolio filter chips: one is selected at a time. The selected chip gets
// .activeBtn for the look and aria-pressed="true" so screen readers announce
// it as "pressed"; the rest get aria-pressed="false".
var btnContainer = document.getElementById("project-btns");

if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("tag-badge");

  var selectChip = function (chip) {
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j] === chip;
      btns[j].classList.toggle("activeBtn", on);
      btns[j].setAttribute("aria-pressed", on ? "true" : "false");
    }
  };

  for (var i = 0; i < btns.length; i++) {
    btns[i].setAttribute("aria-pressed", btns[i].classList.contains("activeBtn") ? "true" : "false");
    btns[i].addEventListener("click", function () {
      selectChip(this);
    });
  }
}
