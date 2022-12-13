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
    }
  }

  header.onmouseout = () => {
    scroll = window.pageYOffset;

    if (scroll > 0) {
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