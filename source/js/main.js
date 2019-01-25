"use strict"
//форма оттправки
//кнопка отправки
// window.addEventListener("DOMContentLoaded", function () {

//   var form = document.getElementById("fb-form");

//   document.getElementById("submit-form").addEventListener("click", function () {
//     form.submit();
//   });
// });
//
//маска формы ввода телефона
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
//

//end

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
link[3].addEventListener("click", function(event) {
  event.preventDefault();
  nmodal = 2;
  //console.log("клик по ссылке");
  popup[nmodal].classList.add("services__modal-window--show");
  document.getElementById("overlay").style.display = "block";
});
link[4].addEventListener("click", function(event) {
  event.preventDefault();
  nmodal = 2;
  //console.log("клик по ссылке");
  popup[nmodal].classList.add("services__modal-window--show");
  document.getElementById("overlay").style.display = "block";
});
link[5].addEventListener("click", function(event) {
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
  //console.log("клик по сслке");
  popup[nmodal].classList.remove("services__modal-window--show");
});
}


//end

// // services gallery
var largeImg = document.querySelectorAll(".services__modal-main-photo");
var thumbs = document.querySelectorAll(".services__modal-items");

for (var i = 0; i < thumbs.length; i ++) {
  thumbs[i].onclick = function(e) {
  var target = e.target;

  while (target != this) {

    if (target.nodeName == 'A') {
      showThumbnail(target.href, target.title);
      return false;
    }

    target = target.parentNode;
  }

}

var imgs = thumbs[0].getElementsByTagName('img');
for (var nnm = 0; nnm < imgs.length; nnm++) {
  var url = imgs[nnm].parentNode.href;
  var img = document.createElement('img');
  img.src = url;
 }
}

function showThumbnail(href, title) {
  for (var i = 0; i < largeImg.length; i++) {
  largeImg[i].src = href;
  largeImg[i].alt = title;
  }
}

//end

//gallery more works
var worklink = document.querySelector(".gallery__more-works");
var mgallery1 = document.querySelector(".gallery__images:nth-of-type(2)");
var mgallery2 = document.querySelector(".gallery__images:nth-of-type(3)");
var mgallery3 = document.querySelector(".gallery__images:nth-of-type(4)");

worklink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по ссылке");
  if (!mgallery1.classList.contains("gallery__images--show")) {
    mgallery1.classList.add("gallery__images--show")
    // worklink.innerHTML = "меньше работ";
  }
  else if (!mgallery2.classList.contains("gallery__images--show")) {
    mgallery2.classList.add("gallery__images--show")
    // worklink.innerHTML = "меньше работ";
  }
  else if (!mgallery3.classList.contains("gallery__images--show")) {
    mgallery3.classList.add("gallery__images--show")
     worklink.innerHTML = "меньше работ";
  }
  else {
    mgallery1.classList.remove("gallery__images--show");
    mgallery2.classList.remove("gallery__images--show");
    mgallery3.classList.remove("gallery__images--show");
    worklink.innerHTML = "больше работ";
  }

});
//end

