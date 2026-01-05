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


/*Make links*/
const authPath = document.querySelectorAll('.itens-btn li button,' + '.content-menu .itens-btn li button');
if(authPath){
  console.log(authPath);
  
  authPath[0].onclick = ()=>{
    window.location.href = './auth/login.html'
  }
  authPath[1].onclick = ()=>{
    window.location.href = './auth/sign-up.html'
  }
  authPath[2].onclick = ()=>{
    window.location.href = './auth/login.html'
  }
  authPath[3].onclick = ()=>{
    window.location.href = './auth/sign-up.html'
  }
}