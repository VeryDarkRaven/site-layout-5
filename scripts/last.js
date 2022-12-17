// last bg slider
let lastBGImagesArr = [];

function createlastBGImageArr () {
  const lastBlock = document.querySelector(".last");
  const lastBGContainer = lastBlock.querySelector(".last__bg");
  const lastBGImages = lastBGContainer.querySelectorAll("img");

  for (let i = 0; i < lastBGImages.length; i++) {
    lastBGImagesArr[i] = lastBGImages[i];
    lastBGImages[i].remove();
  }

  createlastImage(lastBGImagesArr);
}

createlastBGImageArr();

function createlastImage (arr) {
  const lastBlock = document.querySelector(".last");
  const lastBGContainer = lastBlock.querySelector(".last__bg");

  let img = document.createElement("img");
  img = arr[0];
  lastBGContainer.appendChild(img);
  img.classList.add("opacity", "scale");

  img = arr[1];
  lastBGContainer.appendChild(img);
}

function switchinglastBG () {
  const lastBlock = document.querySelector(".last");
  const lastBGContainer = lastBlock.querySelector(".last__bg");

  let lastBGImages = lastBGContainer.querySelectorAll("img");

  lastBGImages[1].classList.remove("transition");

  lastBGImages[0].classList.remove("opacity");
  lastBGImages[0].classList.remove("scale");

  lastBGImages[1].classList.add("opacity");
  lastBGImages[1].classList.toggle("scale");

  replacementlastBGImage();

  lastBGImages[0].classList.add("transition");
}

window.addEventListener("load", function() {
  switchinglastBG();
  setInterval(switchinglastBG, 10000);
})

function replacementlastBGImage (arr) {
  const lastBlock = document.querySelector(".last");
  const lastBGContainer = lastBlock.querySelector(".last__bg");
  const lastBGImages = lastBGContainer.querySelectorAll("img");

  setTimeout (function() {
    for (let i = 0; i < lastBGImagesArr.length; i++) {
      if (lastBGImages[1] === lastBGImagesArr[i]) {
        lastBGImages[0].remove();

        lastBGImages[1].classList.remove("opacity");
  
        let img = document.createElement("img");
  
        if (i === lastBGImagesArr.length - 1) {
          img = lastBGImagesArr[0];
        } else {
          img = lastBGImagesArr[i + 1];
        }
  
        lastBGContainer.appendChild(img);
      } else {
        continue;
      }
    }
  }, 7000)
}