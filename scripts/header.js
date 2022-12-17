// header bg
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  let scroll = window.pageYOffset;

  if (scroll > 0) {
    header.classList.add("header_translucent");
  } else {
    header.classList.remove("header_translucent");
  }
});

function headerHover () {
  const header = document.querySelector("header");
  let scroll = 0;
  
  header.onmouseover = () => {
    scroll = window.pageYOffset;

    if (scroll > 0) {
      header.classList.remove("header_translucent");
      header.classList.add("header_black");
    }
  }

  header.onmouseout = () => {
    scroll = window.pageYOffset;

    if (scroll > 0) {
      header.classList.remove("header_black");
      header.classList.add("header_translucent");
    }
  }
}

headerHover();



// down-button links smooth transition
function headerLinksSmoothTransition () {
  const linksBlocks = document.querySelectorAll(".down-button");
  let linksArr = [];
  
  for (let block of linksBlocks) {
    linksArr.push(block.querySelector("a"));
  }

  for (let link of linksArr) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
  
      const href = link.href;
      const idStr = href.slice(href.indexOf("#"));
  
      if (idStr.length !== 1) {
        document.querySelector(`${idStr}`).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    });
  }
}

headerLinksSmoothTransition();



// burger click
function burgerClick () {
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const burger = header.querySelector(".header__burger");

  burger.onclick = () => {
    burger.classList.toggle("header__burger_active");
    body.classList.toggle("lock");
    header.classList.toggle("header_active");

    let scroll = window.pageYOffset;

    if (scroll > 0) {
      header.classList.add("header_translucent");
      header.classList.remove("header_black");
    }
  }
}

burgerClick();