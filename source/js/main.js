"use strict"
//modal window for services




//end
// services gallery
var largeImg = document.querySelector(".services__modal-main-photo");
var thumbs = document.querySelector(".services__modal-items");

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

