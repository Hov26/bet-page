var accordionWrapperNode = document.getElementsByClassName("acc-wrapper")[0];
var accordionHeadline = accordionWrapperNode.getElementsByClassName("acc-item");

function accordionToggle(e) {
  e.preventDefault();
  var accordionContent = this.nextSibling.nextSibling;
  if (accordionContent.classList.contains("hide")) {
    accordionContent.className = "";
  } else {
    accordionContent.className = "hide";
  }
}

for (var i = 0; i < accordionHeadline.length; i++) {
  accordionHeadline[i].addEventListener("click", accordionToggle);
}
