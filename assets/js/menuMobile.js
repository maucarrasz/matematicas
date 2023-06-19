const menuMobileHomeButton = document.getElementById("menu-icon"),
  menuMobileCloseIcon = document.getElementById("menu-close-icon"),
  buttonCloseIcon = menuMobileCloseIcon.parentNode,
  menuMobile = buttonCloseIcon.parentNode;

menuMobileHomeButton.addEventListener("click", appearMenuMobile);
menuMobileCloseIcon.addEventListener("click", closeMenuMobile);

function appearMenuMobile() {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden");
  } else {
    menuMobile.classList.add("hidden");
  }
}

function closeMenuMobile() {
  menuMobile.classList.add("hidden");
}
