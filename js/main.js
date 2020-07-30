const toggleParentItem = document.getElementsByClassName("toggle-nextSibling");

function toggleList(e) {
  e.preventDefault();
  let currentList = this.nextElementSibling;
  if (currentList.classList.contains("hide")) {
    currentList.classList.remove("hide");
  } else {
    currentList.classList.add("hide");
  }
}

for (let i = 0; i < toggleParentItem.length; i++) {
  toggleParentItem[i].addEventListener("click", toggleList);
}
