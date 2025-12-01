const humburger = document.querySelector(".humburger");

const closeMenu = document.querySelector(".close-menu");

const navigations = document.getElementById("Nav-links")



      humburger.onclick = function () {
        navigations.style.display = "flex";
        humburger.style.display = "none";
        closeMenu.style.display = "block";
      }

      closeMenu.onclick = function () {
        navigations.style.display = "none";
        closeMenu.style.display = "none";
        humburger.style.display = "block";
      }
