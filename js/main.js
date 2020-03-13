// onclick head buttons
var btns = document.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace(" btn-active", "");
  this.className += " btn-active";
  });
}

// accordeon menu
var acc = document.getElementsByClassName("menu");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-menu");
    var active = this.nextElementSibling;
    if (active.style.display === "block") {
      active.style.display = "none";
    } else {
      active.style.display = "block";
    }
  });
}