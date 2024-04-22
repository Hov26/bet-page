const toggleParentItem = document.getElementsByClassName("toggle-nextSibling");

function toggleList(e) {
  e.preventDefault();
  let currentList = this.nextElementSibling;
  let currentItem = this;
  if (currentList.classList.contains("hide")) {
    currentList.classList.remove("hide");
    currentItem.classList.add("active");
  } else {
    currentList.classList.add("hide");
    currentItem.classList.remove("active");
  }
}
if (toggleParentItem = 0) {
  console.log('toggleParentItem')
} else {
  console.log('else toggleParentItem')
}

for (let i = 0; i < toggleParentItem.length; i++) {
  toggleParentItem[i].addEventListener("click", toggleList);
}
