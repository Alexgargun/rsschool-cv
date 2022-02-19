// Menu Burger

const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu");

if (iconMenu) {
  console.log(menuBody);
  iconMenu.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(".menu-link");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    console.log(e.target.dataset.num);
    if (menuLink.dataset.num && document.querySelector(menuLink.dataset.num)) {
      const gotoBlock = document.querySelector(menuLink.dataset.num);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;
      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });

      e.preventDefault();
    }
  }
}
