/*Open menu mobile*/
const optionMenu = document.querySelectorAll(
  ".content-menu .close-menu i," + ".content-header .menu-mobile i"
);
var menu = document.querySelector(".content-menu");
var spaceElement = document.querySelectorAll(".section-flex");

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

/* Verify link */
const clinksClicked = document.querySelectorAll(
  ".content-menu .list-itens-nav li a"
);
if (clinksClicked) {
  console.log(clinksClicked);
  clinksClicked.forEach((link) => {
    link.onclick = () => {
      menu.classList.remove("open");
      /*spaceElement.forEach((el)=>{
        el.style.paddingTop = '180px'
      })

        const animateElement = Array.from(spaceElement);
        log*/
    };
  });
}

/*Make links*/
const authPath = document.querySelectorAll(
  ".itens-btn li button," + ".content-menu .itens-btn li button"
);
if (authPath.length > 0) {
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

/*  */
var mask = document.querySelector(".mask");
var formHelp = document.querySelector(".form-help");
if (mask && formHelp) {
  const btnCtaHelp = document.querySelector(".content-hero .btn-cta .btnHelp");
  btnCtaHelp.onclick = () => {
    mask.classList.add("open");
    mask.append(formHelp);
    formHelp.classList.add("open");
    document.querySelector(".close-form").onclick = () => {
      mask.classList.remove("open");
      mask.removeChild(formHelp);
      formHelp.classList.remove("open");
    };
  };
}

/* CONTROLE SIGN STEP */
const contentSignStep = document.querySelector(".sign-steps");
if (contentSignStep) {
  const btnChoose = document.querySelectorAll(".step .card-choose button");
  const step = document.querySelectorAll(".step.form");
  const textChoose = document.querySelector(".context-step");
  const btnBack = document.querySelectorAll("span.back-step");

  const newBtnChoose = Array.from(btnChoose);
  const newStep = Array.from(step);

  newBtnChoose.forEach((ch) => {
    ch.onclick = () => {
      const stepChoose = document.querySelector(".step.choose");
      stepChoose.classList.remove("on");
      stepChoose.classList.add("off");

      const index = newBtnChoose.indexOf(ch);

      for (let i = 0; i < newStep.length; i++) {
        newStep[i].classList.add("off");
      }

      newStep[index].classList.remove("off");
      newStep[index].classList.add("on");

      if (index == 0) {
        textChoose.innerText = "Conta usuário";
      }
      if (index == 1) {
        textChoose.innerText = "Conta advogado";
      }

      btnBack.forEach((btn) => {
        btn.onclick = () => {
          for (let i = 0; i < newStep.length; i++) {
            newStep[i].classList.add("off");
          }
          stepChoose.classList.remove("off");
          stepChoose.classList.add("on");

          textChoose.innerText = "Como você deseja usar a SIGALEI?";
        };
      });
    };
  });
}
