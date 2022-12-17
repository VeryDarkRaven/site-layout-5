// macbook section height
function macbookSectionFullHeightCalc () {
  const macbookBlock = document.querySelector(".macbook-section");
  const container = macbookBlock.querySelector(".container");
  const macbook = container.querySelector(".macbook");

  let contentHeight = macbook.clientHeight;
  
  macbookBlock.style.height = contentHeight + macbook.offsetTop + "px";
}

macbookSectionFullHeightCalc();
window.addEventListener("resize", macbookSectionFullHeightCalc);