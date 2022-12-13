// tabs
function tabItemClick () {
  const features = document.querySelector(".features");
  const tabs = features.querySelector(".features__tabs");
  const buttons = tabs.querySelector(".tabs__buttons").querySelectorAll("li");

  for (let i = 0; i < buttons.length; i++) {
    for (let button of buttons) {
      button.addEventListener("click", function() {
        button.classList.add("active");
  
        if (button !== buttons[i]) {
          buttons[i].classList.remove("active");
        } else {
          switchingTabItem(i);
        }
      })
    }
  }
}

tabItemClick();



function switchingTabItem (num) {
  const features = document.querySelector(".features");
  const tabs = features.querySelector(".features__tabs");
  const groupsItems = tabs.querySelectorAll(".element-group");

  for (let i = 0; i < groupsItems.length; i++) {
    if (i !== num) {
      groupsItems[i].classList.remove("opacity");

      setTimeout(function() {
        groupsItems[i].classList.remove("active");
      }, 500);
    } else {
      setTimeout(function() {
        groupsItems[i].classList.add("active");
        
        setTimeout(function() {
          groupsItems[i].classList.add("opacity");
        }, 100)
      }, 500);
    }
  }
}

switchingTabItem(0);