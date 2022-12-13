// dropdown form
function dropdownPositionCreate () {
  const form = document.querySelector(".front__form");
  const dropdownContainer = form.querySelector("ul");
  const dropdownBlocks = dropdownContainer.querySelectorAll("li");

  for (let i = 0; i < dropdownBlocks.length; i++) {
    dropdownBlocks[i].style.top = -((dropdownBlocks[i].clientHeight * (i + 1)) + (+getComputedStyle(dropdownBlocks[i]).marginBottom.slice(0, -2) * (i + 1))) + "px";
  }
}

dropdownPositionCreate();

function dropdownClick () {
  const form = document.querySelector(".front__form");
  const dropdownContainer = form.querySelector("ul");
  const mainBlock = dropdownContainer.querySelector("#style");
  const dropdownItems = dropdownContainer.querySelectorAll("li");

  mainBlock.addEventListener("click", function () {
    dropdownContainer.classList.toggle("dropdown_active");
  })

  for (let item of dropdownItems) {
    item.addEventListener("click", function() {
      mainBlock.textContent = item.textContent;
      mainBlock.value = item.textContent;

      dropdownContainer.classList.toggle("dropdown_active");
    })
  }
}

dropdownClick();



// placeholder
function inputAndTextareaClick () {
  const inputs = document.querySelectorAll("input, textarea");

  if (inputs.length > 0) {
    for (let input of inputs) {
      if (input.readOnly === true) {
        continue;
      }

      input.addEventListener("click", function() {
        const savePlaceholder = this.placeholder;
        const thisElement = this;

        this.setAttribute("placeholder", "");
        document.addEventListener("mouseup", function() {
          thisElement.setAttribute("placeholder", savePlaceholder);
        })
      })
    }
  }
}

inputAndTextareaClick();



// front bg slider
let frontBGImagesArr = [];

function createFrontBGImageArr () {
  const frontBlock = document.querySelector(".front");
  const frontBGContainer = frontBlock.querySelector(".front__bg");
  const frontBGImages = frontBGContainer.querySelectorAll("img");

  for (let i = 0; i < frontBGImages.length; i++) {
    frontBGImagesArr[i] = frontBGImages[i];
    frontBGImages[i].remove();
  }

  createFrontImage(frontBGImagesArr);
}

createFrontBGImageArr();

function createFrontImage (arr) {
  const frontBlock = document.querySelector(".front");
  const frontBGContainer = frontBlock.querySelector(".front__bg");

  let img = document.createElement("img");
  img = arr[0];
  frontBGContainer.appendChild(img);
  img.classList.add("opacity", "scale");

  img = arr[1];
  frontBGContainer.appendChild(img);
}

function switchingFrontBG () {
  const frontBlock = document.querySelector(".front");
  const frontBGContainer = frontBlock.querySelector(".front__bg");

  let frontBGImages = frontBGContainer.querySelectorAll("img");

  frontBGImages[1].classList.remove("transition");

  frontBGImages[0].classList.remove("opacity");
  frontBGImages[0].classList.remove("scale");

  frontBGImages[1].classList.add("opacity");
  frontBGImages[1].classList.toggle("scale");

  replacementFrontBGImage();

  frontBGImages[0].classList.add("transition");
}

window.addEventListener("load", function() {
  switchingFrontBG();
  setInterval(switchingFrontBG, 10000);
})

function replacementFrontBGImage (arr) {
  const frontBlock = document.querySelector(".front");
  const frontBGContainer = frontBlock.querySelector(".front__bg");
  const frontBGImages = frontBGContainer.querySelectorAll("img");

  setTimeout (function() {
    for (let i = 0; i < frontBGImagesArr.length; i++) {
      if (frontBGImages[1] === frontBGImagesArr[i]) {
        frontBGImages[0].remove();

        frontBGImages[1].classList.remove("opacity");
  
        let img = document.createElement("img");
  
        if (i === frontBGImagesArr.length - 1) {
          img = frontBGImagesArr[0];
        } else {
          img = frontBGImagesArr[i + 1];
        }
  
        frontBGContainer.appendChild(img);
      } else {
        continue;
      }
    }
  }, 7000)
}



// front section height
function frontSectionFullHeightCalc () {
  const frontBlock = document.querySelector(".front");
  const container = frontBlock.querySelector(".container");

  const header = document.querySelector("header");
  const downButton = document.querySelector(".down-button");

  let contentHeight = 0;

  for(let content of container.childNodes) {
    if (content.clientHeight !== undefined) {
      contentHeight += content.clientHeight;
    }
  }
  
  frontBlock.style.height = contentHeight + (header.clientHeight * 3) + downButton.clientHeight + "px";
}

frontSectionFullHeightCalc();
window.addEventListener("resize", frontSectionFullHeightCalc);