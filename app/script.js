const imgButton = document.getElementById("menu-image");
const menuContent = document.getElementById("menu-content");
const mainpage = document.getElementById("anasayfa");
let isMenuOpened = false;

if (imgButton != null && menuContent != null && mainpage != null) {
  console.log("found the", imgButton.id, menuContent.id, mainpage.id);
  imgButton.addEventListener(
    "click",
    () => {
      if (!isMenuOpened) {
        menuContent.style.display = "flex";
        mainpage.style.display = "none";
      }
      else {
        menuContent.style.display = "none";
        mainpage.style.display = "flex";
      }
    },
    false,
  );
}

else {
  console.log("cant found imgButton, menuContent or mainpage");
  console.log(imgButton);
  console.log(menuContent);
  console.log(mainpage);
}