const imgButton = document.getElementById("menu-button");
const menuContent = document.getElementById("menu-content");
const headerContent = document.getElementById("header-content");
const mainpage = document.getElementById("anasayfa");
const mediaQuery = window.matchMedia("(max-width:1640px)");
let isMenuOpened = false;
let isWindowSmall = window.innerWidth > 1640 ? false : true;

console.log("isInitWindowSmall:", isWindowSmall);

if (imgButton != null && menuContent != null && mainpage != null && headerContent != null) {
   console.log("found the", imgButton.id, menuContent.id, mainpage.id, headerContent.id);

   imgButton.addEventListener(
      "click",
      () => {
         if (!isMenuOpened) {
            menuContent.style.display = "flex";
            mainpage.style.display = "none";
            isMenuOpened = !isMenuOpened;
         }
         else {
            menuContent.style.display = "none";
            mainpage.style.display = "flex";
            console.log("[imgButton]isWindowSmall:", isWindowSmall);
            if (!isWindowSmall) {
               imgButton.style.display = "none"
               headerContent.style.display = "flex";
               console.log("sonunda ae");
            }
            else {
               imgButton.style.display = "flex";
            }
            isMenuOpened = !isMenuOpened;
         }
      },
      false,
   );

   mediaQuery.addEventListener(
      "change",
      (event) => {
         isWindowSmall = event.matches;

         if (!isWindowSmall && isMenuOpened) {
            imgButton.style.display = "flex";
            headerContent.style.display = "none";
            console.log("isWindowSmall:", isWindowSmall);
         }

         else if (!isWindowSmall && !isMenuOpened) {
            headerContent.style.display = "flex";
            console.log("isWindowSmall:", isWindowSmall);
         }

         else if (isWindowSmall) {
            imgButton.style.display = "flex";
            console.log("isWindowSmall:", isWindowSmall);
         }

      },
      false
   )
}

else {
   console.log("cant found imgButton, menuContent or mainpage");
   console.log(imgButton);
   console.log(menuContent);
   console.log(mainpage);
   console.log(headerContent);
}