"use strict"
//modal window for services
// var link = document.querySelector(".services a");
// link.addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("клик по сслке");
//   popup.classList.add("login-popup-view");
//   if (storage) {
//     login.value = storage;
//     password.focus();
//   } else {
//     login.focus();
//   }

// });
// getAttribute("id")

var nmodal = 0;
var i;
var link = document.querySelectorAll(".services__item a");
var popup = document.querySelectorAll(".services__modal-window");
var close = document.querySelectorAll(".services__modal-window-close");

//var link = document.querySelector(".services a");
link[0].addEventListener("click", function(event) {
  event.preventDefault();
  nmodal = 0;
  //console.log("клик по ссылке");
  popup[nmodal].classList.add("services__modal-window--show");
  document.getElementById("overlay").style.display = "block";
});
link[1].addEventListener("click", function(event) {
  event.preventDefault();
  nmodal = 1;
  //console.log("клик по ссылке");
  popup[nmodal].classList.add("services__modal-window--show");
  document.getElementById("overlay").style.display = "block";
});
link[2].addEventListener("click", function(event) {
  event.preventDefault();
  nmodal = 2;
  //console.log("клик по ссылке");
  popup[nmodal].classList.add("services__modal-window--show");
  document.getElementById("overlay").style.display = "block";
});

for (i = 0; i < close.length; i++) {
close[i].addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("overlay").style.display = "none";
  console.log("клик по сслке");
  popup[nmodal].classList.remove("services__modal-window--show");
});
}


//end
// // services gallery
var largeImg = document.querySelectorAll(".services__modal-main-photo");
var thumbs = document.querySelectorAll(".services__modal-items");

thumbs.onclick = function(e) {
  var target = e.target;

  while (target != this) {

    if (target.nodeName == 'A') {
      showThumbnail(target.href, target.title);
      return false;
    }

    target = target.parentNode;
  }

}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}



var imgs = thumbs.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
  var url = imgs[i].parentNode.href;
  var img = document.createElement('img');
  img.src = url;
}
//end

