function modalInteract(btnAction, modalWindow) {
  
  btnAction.addEventListener("click", function(e) {
    e.preventDefault();
    modalWindow.classList.add("modal-show");
  });

  var btnClose = modalWindow.querySelector(".modal-close");
  btnClose.addEventListener("click", function(e) {
    e.preventDefault();
    modalWindow.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(e) {
    if(e.keyCode === 27) {
      modalWindow.classList.remove("modal-show");
    }
  });
}

var btnContact = document.querySelector(".btn-contact");
var modalContact = document.querySelector(".modal-feed");

modalInteract(btnContact, modalContact);

/* slideshow slider */
var toggles = document.querySelectorAll(".slide_toggle");
var wrap = document.querySelector(".main-hero-slideshow");

function runShow() {
  var index = 0;
  var timer = setInterval(function(){
    toggles.forEach(function(i) {
      if(i.hasAttribute("checked")) {
        i.removeAttribute("checked");
      }
    });
    toggles[index++ % 3].setAttribute("checked", "checked");
  }, 3000);
  return timer;
}

var timerSlide = runShow();

wrap.addEventListener("mouseover", function(e) {
  clearInterval(timerSlide);
});
wrap.addEventListener("mouseout", function(e) {
  timerSlide = runShow();
});

document.addEventListener("click", function(e) {
  var target = e.target;
  if(target.classList.contains("toggle")) {
    clearInterval(timerSlide);
  }
});