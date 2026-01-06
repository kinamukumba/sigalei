/*Open menu mobile*/
const optionMenu = document.querySelectorAll(
  ".content-menu .close-menu i," + ".content-header .menu-mobile i"
);
var menu = document.querySelector(".content-menu");
if (optionMenu && menu) {
  console.log(optionMenu);

  optionMenu[0].onclick = () => {
    menu.classList.add("open");
    console.log("ola");
  };
  optionMenu[1].onclick = () => {
    menu.classList.remove("open");
  };
}

const clinksClicked = document.querySelectorAll(
  ".content-menu .list-itens-nav li a"
);
if (clinksClicked) {
  console.log(clinksClicked);
  clinksClicked.forEach((link) => {
    link.onclick = () => {
      menu.classList.remove("open");
    };
  });
}

/*Make links*/
const authPath = document.querySelectorAll(
  ".itens-btn li button," + ".content-menu .itens-btn li button"
);
if (authPath) {
  authPath[0].onclick = () => {
    window.location.href = "./auth/login.html";
  };
  authPath[1].onclick = () => {
    window.location.href = "./auth/sign-up.html";
  };
  authPath[2].onclick = () => {
    window.location.href = "./auth/login.html";
    menu.classList.remove("open");
  };
  authPath[3].onclick = () => {
    window.location.href = "./auth/sign-up.html";
    menu.classList.remove("open");
  };
}
