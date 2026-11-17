const imgButton = document.getElementById("menu-button");
const menuContent = document.getElementById("menu-content");
const headerContent = document.getElementById("header-content");
const mainpage = document.getElementById("anasayfa");
let windowWidth;
let isMenuOpened = false;
let isWindowSmall;

if (imgButton != null && menuContent != null && mainpage != null && headerContent != null) {
   console.log("found the", imgButton.id, menuContent.id, mainpage.id, headerContent.id);

   imgButton.addEventListener(
      "click",
      () => {
         windowWidth = window.window.innerWidth;
         if (!isMenuOpened) {
            menuContent.style.display = "flex";
            mainpage.style.display = "none";
            isMenuOpened = !isMenuOpened;
         }
         else {
            menuContent.style.display = "none";
            mainpage.style.display = "flex";
            isMenuOpened = !isMenuOpened;
         }
      },
      false,
   );

   window.addEventListener(
      "resize",
      () => {
         windowWidth = window.innerWidth;
         console.log(windowWidth);

         if (windowWidth > 1640 && isMenuOpened) {
            headerContent.style.display = "none";
         }
         else if (windowWidth < 1640 && isMenuOpened) {
            headerContent.style.display = "none";
            imgButton.style.display = "flex";
         }
         else if (windowWidth > 1640 && !isMenuOpened) {
            headerContent.style.display = "flex"
         }
      },
      true
   );
}

else {
   console.log("cant found imgButton, menuContent or mainpage");
   console.log(imgButton);
   console.log(menuContent);
   console.log(mainpage);
}