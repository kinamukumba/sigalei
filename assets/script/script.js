const optionMenu = document.querySelectorAll(
  ".content-menu .close-menu i," + ".content-header .menu-mobile i"
);
if (optionMenu) {
  console.log(optionMenu);
  const menu = document.querySelector(".content-menu");
  optionMenu[0].onclick = () => {
    menu.classList.add("open");
    console.log('ola');
    
  };
  optionMenu[1].onclick = () => {
    menu.classList.remove("open");
  };
}
